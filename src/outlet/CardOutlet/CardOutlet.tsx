import { useEffect } from 'react';
import styles from './../../components/CardList/CardList.module.css';
import { useParams } from 'react-router-dom';
import { getPokemonSrcImage_byId } from '../../utils/getPokemonSrcImage_byId';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';
import FetchSpinner from '../../components/FetchSpinner/FetchSpinner';
import { useCardActions, useCardAll } from '../../store/useCard/hook';
import AlertDanger from '../../components/AlertDanger/AlertDanger';

export function CardOutlet() {
  const { pokemonNavigation } = usePokemonNavigation();
  const { closeCard, generateFetchError, loadCard_byDetails } =
    useCardActions();
  const { page, details } = useParams();

  const closeRight = () => {
    closeCard();
    pokemonNavigation({ page });
  };

  useEffect(() => {
    if (!details) {
      return;
    }
    (async function () {
      await loadCard_byDetails(details);
    })();
  }, [details, loadCard_byDetails]);

  if (!details) {
    return <></>;
  }

  return (
    <>
      <div className={styles.card_list__right_block_buttons}>
        <button className="btn btn-danger" onClick={() => closeRight()}>
          Close
        </button>
        <button className="btn btn-danger" onClick={() => generateFetchError()}>
          Generate error
        </button>
      </div>
      <CardListRightContent />
    </>
  );
}

function CardListRightContent() {
  const { errorFetch, isFetch, item } = useCardAll();
  const { loadCard_byDetails } = useCardActions();
  const { details } = useParams();

  if (details === null) {
    return <></>;
  }

  if (errorFetch) {
    return (
      <AlertDanger>
        <p>{errorFetch}</p>
        <button
          className="btn btn-success"
          onClick={() => loadCard_byDetails(details)}
        >
          Repeat load fetch
        </button>
      </AlertDanger>
    );
  }

  if (isFetch) {
    return <FetchSpinner>Loading Card</FetchSpinner>;
  }

  if (item === null) {
    return <></>;
  }

  const POKEMON = item;
  const POKEMON_ID = POKEMON.id;
  const POKEMON_IMAGE = getPokemonSrcImage_byId(POKEMON_ID);
  const POLEMON_W = POKEMON.weight;
  const POKEMON_H = POKEMON.height;

  return (
    <div>
      <h2>#{POKEMON_ID}</h2>
      <div>
        <img
          className={styles.card_list__right_block_image}
          src={POKEMON_IMAGE}
          alt=""
        />
      </div>
      <div>
        {POLEMON_W} x {POKEMON_H}
      </div>
    </div>
  );
}
