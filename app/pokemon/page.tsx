'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PokemonIdPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/pokemon/1');
  }, [router]);

  return null;
}
