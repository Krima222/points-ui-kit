import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { InputAvatar } from './InputAvatar';

const meta: Meta<typeof InputAvatar> = {
  title: 'Atoms/InputAvatar',
  component: InputAvatar,
};

export default meta;

type Story = StoryObj<typeof InputAvatar>;

export const Default: Story = {
  render: Wrapper,
};

function Wrapper(arg: Parameters<typeof InputAvatar>[0]) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (newFile: File | null) => {
    if (newFile) {
      setSelectedFile(newFile);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <InputAvatar
      {...arg}
      name="Василий"
      imageFile={selectedFile}
      onChange={handleFileChange}
    />
  );
}
