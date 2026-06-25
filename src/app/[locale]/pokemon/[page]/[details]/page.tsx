'use client';

import CardList from '@/src/components/CardList/CardList';
import { CardOutlet } from '@/src/outlet/CardOutlet/CardOutlet';

export default function PokemonIdPage() {
  return (
    <CardList>
      <CardOutlet />
    </CardList>
  );
}
