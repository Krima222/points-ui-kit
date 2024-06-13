import { StoryObj, Meta } from '@storybook/react';

import { EmptyPage } from './EmptyPage';

const meta: Meta<typeof EmptyPage> = {
  title: 'Organisms/EmptyPage',
  component: EmptyPage,
};

export default meta;

type Story = StoryObj<typeof EmptyPage>;

export const Default: Story = {
  args: {
    pageName: 'Медиа',
    buttonHandleClick: () => {},
  },
};
