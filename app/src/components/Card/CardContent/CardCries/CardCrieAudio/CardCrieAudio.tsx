import styles from './CardCrieAudio.module.css';

interface IPropsCardCrieAudio {
  src: string | null;
}

export default function CardCrieAudio(props: IPropsCardCrieAudio) {
  if (!props.src) {
    return null;
  }

  return <audio className={styles.audio} controls src={props.src} />;
}
