import { useNavigate } from 'react-router-dom';

export function usePokemonNavigation() {
  const navigate = useNavigate();

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

    navigate(uri);
  };

  return { pokemonNavigation };
}
