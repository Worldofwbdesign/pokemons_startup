import React from 'react';
import { observer } from 'startupjs';
import { Div, Checkbox } from '@startupjs/ui';
import { useSelect } from './hooks';

import './index.styl';

const PokemonTypeMultiselect = observer(() => {
  const [items, selectedItems, setSelectedItems, loading] = useSelect();

  return pug`
    Div.root
      each item in items 
        Checkbox.checkbox(
          key=item._id
          label=item.name
          value=selectedItems.includes(item._id)
          onChange=newChecked => setSelectedItems(item._id, newChecked)
        )
  `;
});

export default PokemonTypeMultiselect;
