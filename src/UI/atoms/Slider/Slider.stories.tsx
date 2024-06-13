import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Layout/Slider',
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

const style = {
  width: '100px',
  height: '100px',
  backgroundColor: 'red',
};

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
        <div style={style} />
      </>
    ),
  },
};
