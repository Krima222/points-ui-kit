import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { Button } from '../../atoms/Button';

import { ContainerCard } from './ContainerCard';

const meta: Meta<typeof ContainerCard> = {
  title: 'Molecules/Data display/ContainerCard',
  component: ContainerCard,
};

export default meta;

type Story = StoryObj<typeof ContainerCard>;

export const Default: Story = {
  args: {
    title: 'Выберите страну для переезда',
    description: 'Расскажем по пунктам, как безопасно переехать в новое место',
    children: <Button text="Начать" variant="secondary" />,
  },
};
