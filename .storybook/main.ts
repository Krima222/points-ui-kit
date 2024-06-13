import path from 'path';
import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public', '../styles'],
  webpackFinal: (config) => {
    if (!config.resolve) {
      throw new Error(
        'Что-то не так с вебпаком, config resolve is not defined',
      );
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };

    return config;
  },
};

module.exports = config;
