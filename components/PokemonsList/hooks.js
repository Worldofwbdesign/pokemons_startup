import { usePage, useQuery } from 'startupjs'

export const usePokemonsList = () => {
  const [search = ''] = usePage('search')
  const [page = 0] = usePage('page')
  const [pageSize = 10] = usePage('pageSize')
  const [selectedItems = []] = usePage('selectedItems')

  const query = {
    _type: { $ne: null }
  }
  if (search) {
    query.name = { $regex: search, $options: 'i' }
  }
  if (selectedItems.length) {
    query.type = { $in: selectedItems }
  }
  query.$sort = { order: 1 }
  query.$skip = page * pageSize
  query.$limit = pageSize

  const [pokemons = [], loading] = useQuery('pokemons', query)

  return [pokemons, loading]
}
