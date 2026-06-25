'use client';

import type { JSX } from 'react';
import { useParams } from 'next/navigation';
import { usePokemonNavigation } from '../../../../../hook/usePokemonNavigation/usePokemonNavigation';

interface IPropsCardListRightButton {
  nextPage: number;
  lastPage: number;
}

export default function CardListRightButton(
  props: IPropsCardListRightButton
): JSX.Element {
  const { details } = useParams();
  const { pokemonNavigation } = usePokemonNavigation();

  const NEXT_PAGE = props.nextPage;
  const LAST_PAGE = props.lastPage;

  if (NEXT_PAGE > LAST_PAGE) {
    return <button disabled={true}>→</button>;
  }

  return (
    <button
      onClick={() =>
        pokemonNavigation({ page: NEXT_PAGE, details: `${details}` })
      }
    >
      →
    </button>
  );
}
