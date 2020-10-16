import React from 'react';
import { model, observer, usePage, useQuery, useDoc, emit } from 'startupjs';
import { Div } from '@startupjs/ui';
import PokemonCard from '../PokemonCard';
import { usePokemonsList } from './hooks';

import './index.styl';

export default observer(function PokemonsList() {
  const [pokemons] = usePokemonsList();

  return pug`
    Div.root
      each pokemon in pokemons
        PokemonCard(
          key=pokemon.id
          pokemon=pokemon
        )
  `;
});
