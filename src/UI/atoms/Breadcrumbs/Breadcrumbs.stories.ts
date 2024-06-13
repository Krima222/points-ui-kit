import { StoryObj, Meta } from '@storybook/react';

import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    breadcrumbs: [
      { text: 'Item 1', onClick: () => console.log('Clicked 1') },
      { text: 'Item 2', onClick: () => console.log('Clicked 2') },
      { text: 'Item 3', onClick: () => console.log('Clicked 3') },
      { text: 'Item 4', onClick: () => console.log('Clicked 4') },
    ],
  },
};
