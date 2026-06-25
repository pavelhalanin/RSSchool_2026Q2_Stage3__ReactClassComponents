import type IPokemon from '../../../../query/card/IPokemon';
import CardCrieAudio from './CardCrieAudio/CardCrieAudio';

interface IPropsCardCries {
  data: IPokemon | undefined;
}
export default function CardCries(props: IPropsCardCries) {
  if (!props.data) {
    return null;
  }

  return (
    <div>
      {props.data.pokemoncries.map((e) => {
        return (
          <>
            <CardCrieAudio src={e.cries.latest} />
            <CardCrieAudio src={e.cries.legacy} />
          </>
        );
      })}
    </div>
  );
}
