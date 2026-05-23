import { useEffect } from 'react';
import styles from '../CardList.module.css';
import PokemonHelper from '../../../utils/PokemonHelper';
import { useCardState } from '../../../store/useCard/useCardState';
import { useSearchParams } from 'react-router-dom';

interface ICardListRightProps {
  setParams: (page: null | string, details: string) => void;
}

export function CardListRight(props: ICardListRightProps) {
  const { closeCard, generateFetchError, loadCard_byDetails } = useCardState();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const details = searchParams.get('details');

  const closeRight = () => {
    closeCard();
    props.setParams(page, '');
  };

  useEffect(() => {
    if (details === null || details == '') {
      return;
    }
    (async function () {
      await loadCard_byDetails(details);
    })();
  }, [details, loadCard_byDetails]);

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
  const { errorFetch, isFetch, item, loadCard_byDetails } = useCardState();
  const [searchParams] = useSearchParams();
  const details = searchParams.get('details');

  if (errorFetch) {
    return (
      <div className="alert alert-danger">
        {errorFetch}
        <button
          className="btn btn-success"
          onClick={() => loadCard_byDetails(details)}
        >
          Repeat load fetch
        </button>
      </div>
    );
  }

  if (isFetch) {
    return <div className={styles.spinner__wrapper}>Loading</div>;
  }

  if (item === null) {
    return <></>;
  }

  const POKEMON = item;
  const POKEMON_ID = POKEMON.id;
  const POKEMON_IMAGE = PokemonHelper.getMainImage_byPokemonId(POKEMON_ID);
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
