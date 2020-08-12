import { addDecorator } from '@storybook/react';
import React from 'react';

import Colors from '../src/styles/settings/Colors';
import Reset from '../src/styles/Reset';

function withGlobalStyles(storyFn) {
  return (
    <>
      <Colors />
      <Reset />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);
