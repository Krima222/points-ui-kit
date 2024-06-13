import { StoryObj, Meta } from '@storybook/react';

import { InputCheckbox } from './InputCheckbox';

const meta: Meta<typeof InputCheckbox> = {
  title: 'Atoms/Inputs/InputChecbox',
  component: InputCheckbox,
  parameters: {
    docs: {
      description: {
        component: '❗ Компонент должен быть обёрнут в label',
      },
    },
  },
  decorators: [
    (Story) => (
      <label style={{ cursor: 'pointer' }}>
        <Story />
      </label>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof InputCheckbox>;

export const Default: Story = {};
