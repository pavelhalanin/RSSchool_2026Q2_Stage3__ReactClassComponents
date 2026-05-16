import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './CardList.module.css';
import Search from '../Search/Search';
import Card from '../Card/Card';
import ErrorButton from '../ErrorButton/ErrorButton';
import type { ICardListPokemon } from './ICardListPokemon';
import { useSearchParams } from 'react-router-dom';

export default function CardList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || '1';

  const [search, setSearch] = useState<string>(
    localStorage.getItem('search') || ''
  );
  const [searchPrev, setSearchPrev] = useState<string | null>(null);

  const [pokemons, setPokomons] = useState<Array<ICardListPokemon>>([]);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [errorFetch, setErrorFetch] = useState<string | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogPokemonId, setDialogPokemonId] = useState<number>(0);

  const searchRef = useRef(search);
  const searchPrevRef = useRef(searchPrev);
  const errorFetchRef = useRef(errorFetch);

  const setParams = (page: string, details: string) => {
    setSearchParams({
      page,
      ...(details && { details }),
    });
  };

  useEffect(() => {
    searchRef.current = search;
    searchPrevRef.current = searchPrev;
    errorFetchRef.current = errorFetch;
  });

  const fetchPokemons = useCallback(async () => {
    const SEARCH = searchRef.current.trim();
    localStorage.setItem('search', SEARCH);

    if (
      SEARCH === searchPrevRef.current &&
      errorFetchRef.current === null &&
      searchPrevRef.current !== null
    ) {
      console.log(
        [
          `No load Pokemon card list because:`,
          `- SEARCH "${SEARCH}" === searchPrev "${searchPrevRef.current}"`,
          `- and errorFetch === null`,
          `- and searchPrev !== null`,
        ].join('\n')
      );
      return;
    }

    setPokomons([]);
    setIsFetch(true);
    setErrorFetch(null);

    const GRAPHQL = `
    query MyQuery {
      pokemon(where: {name: {_like: "%${SEARCH}%"}}) {
        height
        id
        name
        weight
        pokemontypes {
          slot
          type {
            name
          }
        }
      }
    }
  `;

    const URL_ = `https://graphql.pokeapi.co/v1beta2`;
    const RESPONSE = await fetch(URL_, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GRAPHQL,
      }),
    });

    const HTTP_STATUS = RESPONSE.status;

    if (HTTP_STATUS >= 400 && HTTP_STATUS <= 599) {
      const TEXT = await RESPONSE.text();
      const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

      setPokomons([]);
      setIsFetch(false);
      setErrorFetch(MESSAGE);
      return;
    }

    if (HTTP_STATUS !== 200) {
      const TEXT = await RESPONSE.text();
      const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;

      setPokomons([]);
      setIsFetch(false);
      setErrorFetch(MESSAGE);
      return;
    }

    const DATA = await RESPONSE.json();

    const POKEMONS: Array<ICardListPokemon> = (DATA.data.pokemon || [])
      .filter(Boolean)
      .map((e: ICardListPokemon) => {
        return {
          ...e,
          image_src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`,
        };
      });

    setPokomons(POKEMONS);
    setIsFetch(false);
    setErrorFetch(null);
    setSearch(SEARCH);
    setSearchPrev(SEARCH);
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  const generateFetchError = () => {
    setPokomons([]);
    setIsFetch(false);
    setErrorFetch('Custom test error HTTP 400-500');
  };

  if (isFetch) {
    return <div className={styles.spinner__wrapper}>Pokémon Collection</div>;
  }

  return (
    <>
      <Card
        pokemonId={dialogPokemonId}
        isDialogOpen={isDialogOpen}
        updateState_card_isDialogOpen={setIsDialogOpen}
      />
      <div className="container">
        <section className="section">
          <Search
            search={search}
            fetchPokemons={fetchPokemons}
            updateState_search={setSearch}
          />
          <div className={styles.error_buttons__wrapper}>
            <ErrorButton />
            <button
              className="btn btn-danger"
              onClick={() => generateFetchError()}
            >
              Generate fetch error
            </button>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="section">
          <h1 className="h1">Pokémon Collection</h1>
          {errorFetch ? (
            <div className="alert alert-danger">
              <div>{errorFetch}</div>
              <button
                className="btn btn-success"
                onClick={() => fetchPokemons()}
              >
                Repeat load fetch
              </button>
            </div>
          ) : (
            <>
              {pokemons.length != 0 ? (
                ''
              ) : (
                <div className="container">
                  <div className="alert alert-danger">
                    No Pokémon found by search. Please enter a different search
                    term and click the search button.
                  </div>
                </div>
              )}

              <ul className={styles.card_list}>
                {pokemons?.map((pokemon) => {
                  const POKEMON_ID: number = Number(pokemon.id);
                  return (
                    <li key={POKEMON_ID} className="pokemon-card">
                      <button
                        onClick={() => {
                          setIsDialogOpen(true);
                          setDialogPokemonId(POKEMON_ID);
                          setParams(page, `${POKEMON_ID}`);
                        }}
                      >
                        <div className={styles.card_list__image_block}>
                          <img
                            src={pokemon.image_src}
                            alt={pokemon.name}
                            onError={(e) => {
                              (e.target as HTMLImageElement).title =
                                `Не удалось загрузить фото\n${pokemon.image_src}`;
                            }}
                          />
                        </div>
                        <h2 className={styles.card_list__pokemon_id}>
                          #{pokemon.id}
                        </h2>
                        <h3>{pokemon.name}</h3>
                        <div>
                          {pokemon.weight} x {pokemon.height}
                        </div>
                        <ul className={styles.pokemon__types}>
                          {pokemon.pokemontypes.map((e) => {
                            return <li key={e.type.name}>{e.type.name}</li>;
                          })}
                        </ul>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </section>
      </div>
    </>
  );
}
