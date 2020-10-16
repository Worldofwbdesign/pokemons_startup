import React from 'react';
import { observer } from 'startupjs';
import { ScrollView } from 'react-native';
import PokemonsList from 'components/PokemonsList';
import Search from 'components/Search';
import PokemonTypeMutiselect from 'components/PokemonTypeMutiselect';
import PokemonsPagination from 'components/PokemonsPagination';
import PageContent from 'components/PageContent';
import { Div } from '@startupjs/ui';

import './index.styl';

export default observer(function PHome() {
  return pug`
    ScrollView.root
      PageContent
        Div.section
          Search
        Div.section
          PokemonTypeMutiselect
        Div.section
          PokemonsList
        Div.section.section--center
          PokemonsPagination
  `;
});
