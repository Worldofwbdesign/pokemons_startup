import { usePage, useQuery } from 'startupjs';
import { PAGE_SIZE } from '../PokemonsPagination';

export const usePokemonsList = () => {
  const [search = ''] = usePage('search');
  const [page = 0] = usePage('page');
  const [selectedItems = []] = usePage('selectedItems');

  const query = {
    _type: { $ne: null },
    name: { $regex: search, $options: 'i' }
  };
  if (selectedItems.length) {
    query.type = { $in: selectedItems };
  }
  query.$sort = { order: 1 };
  query.$skip = page * PAGE_SIZE;
  query.$limit = PAGE_SIZE;

  const [pokemons = [], loading] = useQuery('pokemons', query);

  return [pokemons, loading];
};
