import { Meta, StoryObj } from '@storybook/react';

import { ProgressPoints } from './ProgressPoints';

const meta: Meta<typeof ProgressPoints> = {
  title: 'Atoms/ProgressPoints',
  component: ProgressPoints,
};

export default meta;

type Story = StoryObj<typeof ProgressPoints>;

export const Default: Story = {
  args: {
    steps: [
      {
        title: 'Подготовка питомца к переезду',
        count: 5,
        progress: 3,
      },
      { title: 'Подготовка питомца к переезду', count: 5, progress: 5 },
      { title: 'Подача на внж ', count: 5, progress: 2 },
      { title: 'После переезда', count: 5, progress: 3 },
      { title: 'После переезда', count: 5, progress: 5 },
    ],
  },
};
