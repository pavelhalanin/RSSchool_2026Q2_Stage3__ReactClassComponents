import styles from './../CardList/CardList.module.css';
import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';
import CardContent from './CardContent/CardContent';

export function Card() {
  const { pokemonNavigation } = usePokemonNavigation();
  const { page, details } = useParams();

  const closeRight = () => {
    pokemonNavigation({ page });
  };

  if (!details) {
    return <></>;
  }

  return (
    <>
      <div className={styles.card_list__right_block_buttons}>
        <button className="btn btn-danger" onClick={() => closeRight()}>
          Close
        </button>
      </div>
      <CardContent />
    </>
  );
}
