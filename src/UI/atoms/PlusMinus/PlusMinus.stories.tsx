import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { PlusMinus } from './PlusMinus';

const meta: Meta<typeof PlusMinus> = {
  title: 'Atoms/Inputs/PlusMinus',
  component: PlusMinus,
};

export default meta;

type Story = StoryObj<typeof PlusMinus>;

export const Default: Story = {
  render: Wrapper,
};

function Wrapper(args: Parameters<typeof PlusMinus>[0]) {
  const [count, setCount] = useState(0);

  return <PlusMinus {...args} value={count} onChange={setCount} />;
}
