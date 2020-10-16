import React from 'react';
import { observer, useDoc } from 'startupjs';
import { ScrollView } from 'react-native';
import { Content, Loader } from '@startupjs/ui';
import PokemonForm from 'components/PokemonForm';
import PageContent from 'components/PageContent';

import './index.styl';

export default observer(function PPokemonForm({
  match: {
    params: { pokemonId }
  }
}) {
  const [pokemon] = useDoc('pokemons', pokemonId);

  if (!pokemon && pokemonId !== 'new') {
    return pug`
      Loader
    `;
  }

  return pug`
    ScrollView.root
      PageContent(center)
        PokemonForm(pokemon=pokemon)
  `;
});
