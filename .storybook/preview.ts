import { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../styles/global.css';
import './fonts.css';

const customViewports = {
  xs: {
    name: 'XS',
    styles: {
      width: '480px',
      height: '600px',
    },
  },
  s: {
    name: 'S',
    styles: {
      width: '640px',
      height: '801px',
    },
  },
  m: {
    name: 'M',
    styles: {
      width: '960px',
      height: '700px',
    },
  },
  l: {
    name: 'L',
    styles: {
      width: '1200px',
      height: '800px',
    },
  },
  xl: {
    name: 'XL',
    styles: {
      width: '1400px',
      height: '900px',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...customViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    backgrounds: {
      default: 'points',
      values: [
        {
          name: 'points',
          value: 'var(--background-space-blue)',
        },
        {
          name: 'white',
          value: 'white',
        },
        {
          name: 'black',
          value: 'black',
        },
      ],
    },
  },
};

export default preview;
