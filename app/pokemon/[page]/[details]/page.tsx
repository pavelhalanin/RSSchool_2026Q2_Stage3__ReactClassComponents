'use client';

import CardList from '@/app/src/components/CardList/CardList';
import { CardOutlet } from '@/app/src/outlet/CardOutlet/CardOutlet';

export default function PokemonIdPage() {
  return (
    <CardList>
      <CardOutlet />
    </CardList>
  );
}
