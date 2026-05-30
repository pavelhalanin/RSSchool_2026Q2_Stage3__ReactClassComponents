import extractImageUrls from '../../../../query/card/extractImageUrls';
import type { IPokemon } from '../../../../store/slices/useCard/types';
import styles from './CardSprites.module.css';

interface IPropsCardSprites {
  data: IPokemon | undefined;
}

export default function CardSprites(props: IPropsCardSprites) {
  if (!props.data) {
    return <></>;
  }

  const images = extractImageUrls(props.data);
  return (
    <ul className={styles.images}>
      {images.map((e) => {
        return (
          <li key={e}>
            <img src={e} alt="" />
          </li>
        );
      })}
    </ul>
  );
}
