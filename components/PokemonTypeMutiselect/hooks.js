import { useQuery, usePage } from 'startupjs';

export const useSelect = () => {
  const [selectedItems = [], $selectedItems] = usePage('selectedItems');
  const [items = []] = useQuery('pokemons', {
    $aggregate: [
      { $match: { _type: { $ne: null } } },
      { $group: { _id: '$type' } },
      { $set: { name: '$_id' } }
    ]
  });

  const setSelectedItems = (type, selected) =>
    selected
      ? $selectedItems.push(type)
      : $selectedItems.set(selectedItems.filter(item => item !== type));

  return [items, selectedItems, setSelectedItems];
};
