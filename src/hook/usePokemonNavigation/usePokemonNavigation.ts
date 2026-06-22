'use client';

import { useRouter } from 'next/navigation';

export function usePokemonNavigation() {
  const router = useRouter();

  const pokemonNavigation = (newParams: {
    page?: string | number;
    details?: string;
  }) => {
    const page = Number(newParams.page) > 0 ? newParams.page : '1';
    const details = newParams.details;

    let uri = `/pokemon/${page}`;

    if (details) {
      uri += `/${details}`;
    }

    router.push(uri);
  };

  return { pokemonNavigation };
}
