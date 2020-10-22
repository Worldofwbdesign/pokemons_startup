import React from 'react';
import { Content } from '@startupjs/ui';

import './index.styl';

const PageContent = ({ children, center }) => {
  return pug`
    Content.root(
      full
      styleName=[center && 'center']
    )= children
`;
};

export default PageContent;
