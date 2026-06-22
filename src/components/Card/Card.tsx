import styles from './../CardList/CardList.module.css';
import { useParams } from 'next/navigation';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';
import CardContent from './CardContent/CardContent';

export function Card() {
  const { pokemonNavigation } = usePokemonNavigation();
  const { page, details } = useParams();

  const closeRight = () => {
    pokemonNavigation({ page: `${page}` });
  };

  if (!details) {
    return null;
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
