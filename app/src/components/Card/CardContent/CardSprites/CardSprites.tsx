import Image from 'next/image';
import extractImageUrls from '../../../../query/card/extractImageUrls';
import type IPokemon from '../../../../query/card/IPokemon';
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
            <Image src={e} alt="" width={100} height={100} />
          </li>
        );
      })}
    </ul>
  );
}
