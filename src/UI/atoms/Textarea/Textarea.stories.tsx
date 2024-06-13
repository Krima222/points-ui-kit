import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: Wrapper,
};

function Wrapper(args: Parameters<typeof Textarea>[0]) {
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <Textarea {...args} value={textareaValue} onChange={setTextareaValue} />
  );
}
