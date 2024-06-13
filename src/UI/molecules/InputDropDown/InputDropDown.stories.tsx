import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InputDropDown } from './InputDropDown';

const meta: Meta<typeof InputDropDown> = {
  title: 'molecules/Input/InputDropDown',
  component: InputDropDown,
};

export default meta;

type Story = StoryObj<typeof InputDropDown>;

export const Default: Story = {
  render: Wrapper,
};

function Wrapper(args: Parameters<typeof InputDropDown>[0]) {
  const [state, setState] = useState<string>();
  const country = [
    {
      id: 'djshfjksdfjksd',
      imgURL: '',
      label: 'Турция',
      value: '0',
    },
    {
      id: 'djshfjksdfjksd',
      imgURL: '',
      label: 'Россия',
      value: '1',
    },
    {
      id: 'djshfjksdfjksd',
      imgURL: '',
      label: 'Сербия',
      value: '2',
    },
  ];

  return (
    <InputDropDown
      {...args}
      value={state}
      id="1211"
      onChange={setState}
      label="Выбирите страну"
      disabled={false}
      hasError={false}
      errorMessage="Ошибка"
      options={country}
    />
  );
}
