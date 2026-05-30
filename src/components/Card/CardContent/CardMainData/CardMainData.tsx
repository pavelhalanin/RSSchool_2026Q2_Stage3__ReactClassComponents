import type { IPokemon } from '../../../../store/slices/useCard/types';
import { getPokemonSrcImage_byId } from '../../../../utils/getPokemonSrcImage_byId';
import styles from './CardMainData.module.css';

interface IPropsCardMainData {
  data: IPokemon | undefined;
}

export default function CardMainData(props: IPropsCardMainData) {
  if (!props.data) {
    return <></>;
  }

  const POKEMON = props.data;
  const POKEMON_NAME = POKEMON.name;
  const POKEMON_ID = POKEMON.id;
  const POKEMON_IMAGE = getPokemonSrcImage_byId(POKEMON_ID);
  const POLEMON_W = POKEMON.weight;
  const POKEMON_H = POKEMON.height;

  return (
    <>
      <h2>
        #{POKEMON_ID} {POKEMON_NAME}
      </h2>
      <div>
        <img className={styles.image} src={POKEMON_IMAGE} alt="" />
      </div>
      <div className={styles.weight_height_block}>
        {POLEMON_W} x {POKEMON_H}
      </div>
    </>
  );
}
