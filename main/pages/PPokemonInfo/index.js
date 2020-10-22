import React from 'react';
import { observer } from 'startupjs';
import { ScrollView } from 'react-native';
import { useDoc, emit } from 'startupjs';
import { Button, Content, Loader } from '@startupjs/ui';
import PokemonCard from 'components/PokemonCard';
import PageContent from 'components/PageContent';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './index.styl';

export default observer(function PPokemonInfo({
  match: {
    params: { pokemonId }
  }
}) {
  const [pokemon] = useDoc('pokemons', pokemonId);

  if (!pokemon) {
    return pug`
      Loader
    `;
  }
  return pug`
    ScrollView.root
      PageContent(
        center
      )
        Content
          Button.backBtn(
            variant='text'
            icon=faArrowLeft
            onPress=() => emit('url', '/')
          )
          PokemonCard(
            single
            pokemon=pokemon
            fullInfo
          )
  `;
});
