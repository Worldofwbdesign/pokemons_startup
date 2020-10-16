import React from 'react';
import { observer, usePage, useQuery } from 'startupjs';
import { Pagination } from '@startupjs/ui';

export const PAGE_SIZE = 10;

const PokemonsPagination = observer(() => {
  const [page = 0, $page] = usePage('page');
  const [search] = usePage('search');
  const [selectedItems = []] = usePage('selectedItems');
  const $match = {
    _type: { $exists: true },
    name: { $regex: search, $options: 'i' }
  };
  if (selectedItems.length) {
    $match.type = { $in: selectedItems };
  }
  const [[{ count = 0 } = {}]] = useQuery('pokemons', {
    $aggregate: [{ $match }, { $count: 'count' }]
  });

  return pug`
    Pagination(
      variant='compact'
      page=page
      pages=Math.ceil(count / PAGE_SIZE)
      onChangePage=newPage => $page.set(newPage)
    )
  `;
});

export default PokemonsPagination;
