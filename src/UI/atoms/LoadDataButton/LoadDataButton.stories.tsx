import { StoryObj, Meta } from '@storybook/react';

import { LoadDataButton } from './LoadDataButton';

const meta: Meta<typeof LoadDataButton> = {
  title: 'Atoms/LoadDataButton',
  component: LoadDataButton,
};

export default meta;

type Story = StoryObj<typeof LoadDataButton>;

export const Default: Story = {
  args: {
    label: 'Добавить фото документа ',
  },
};
