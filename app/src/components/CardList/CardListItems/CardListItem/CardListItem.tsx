import type { JSX } from 'react';
import type { ICardListItemPokemon } from '../../../../query/cardList/IPaginationCardList';
import { getPokemonSrcImage_byId } from '../../../../utils/getPokemonSrcImage_byId';
import styles from './CardListItem.module.css';
import { useParams } from 'next/navigation';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import CardListItemCsvCheckbox from './CardListItemCsvCheckbox/CardListItemCsvCheckbox';
import Image from 'next/image';

interface IPropsCardListItem {
  item: ICardListItemPokemon;
}

export default function CardListItem(props: IPropsCardListItem): JSX.Element {
  const { page } = useParams();
  const { pokemonNavigation } = usePokemonNavigation();

  const POKEMON = props.item;

  const POKEMON_IMAGE = getPokemonSrcImage_byId(POKEMON.id);

  return (
    <li className={styles.card}>
      <CardListItemCsvCheckbox item={POKEMON} />
      <button
        className={styles.pokemon_button}
        onClick={() =>
          pokemonNavigation({ page: `${page}`, details: `${POKEMON.id}` })
        }
      >
        <div className={styles.image_block}>
          <Image src={POKEMON_IMAGE} alt="" width={100} height={100} />
        </div>
        <h2 className={styles.pokemon_id}>#{POKEMON.id}</h2>
        <h3>{POKEMON.name}</h3>
        <div>
          {POKEMON.weight} x {POKEMON.height}
        </div>
        <ul className={styles.pokemon__types}>
          {POKEMON.pokemontypes.map((type) => {
            const NAME = type.type.name;
            return <li key={NAME}>{NAME}</li>;
          })}
        </ul>
      </button>
    </li>
  );
}
