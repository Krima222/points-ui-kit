import { StoryObj, Meta } from '@storybook/react';

import { FieldBackground } from './FieldBackground';

const meta: Meta<typeof FieldBackground> = {
  title: 'Atoms/Inputs/FieldBackground',
  component: FieldBackground,
  parameters: {
    docs: {
      description: {
        component:
          'Заворачивает компонент в label, сам задаёт стиль при фокусе',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FieldBackground>;

export const Default: Story = {
  args: {
    field: 'Это обёртка для любого инпута',
  },
};
