'use client';

import type { JSX } from 'react';
import { useParams } from 'next/navigation';
import { usePokemonNavigation } from '../../../../../hook/usePokemonNavigation/usePokemonNavigation';

interface IPropsCardListLeftButton {
  prevPage: number;
}

export default function CardListLeftButton(
  props: IPropsCardListLeftButton
): JSX.Element {
  const { details } = useParams();
  const { pokemonNavigation } = usePokemonNavigation();

  const PREV_PAGE = props.prevPage;

  if (PREV_PAGE < 1) {
    return <button disabled={true}>←</button>;
  }

  return (
    <button
      onClick={() =>
        pokemonNavigation({ page: PREV_PAGE, details: `${details}` })
      }
    >
      ←
    </button>
  );
}
