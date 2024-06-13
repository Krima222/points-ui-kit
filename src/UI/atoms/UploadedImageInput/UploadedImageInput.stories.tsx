import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { LoadDataButton } from '../LoadDataButton';

import { UploadedImageInput } from './UploadedImageInput';

const meta: Meta<typeof UploadedImageInput> = {
  title: 'Atoms/UploadedImageInput',
  component: UploadedImageInput,
};

export default meta;

type Story = StoryObj<typeof UploadedImageInput>;

export const Default: Story = {
  render: Wrapper,
};

function Wrapper(arg: Parameters<typeof UploadedImageInput>[0]) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFilesChange = (newFile: File[] | null) => {
    if (newFile && newFile.length > 0) {
      setSelectedFile(newFile[0]);
    } else {
      setSelectedFile(null);
    }
  };
  const handleFileChange = (newFile: File | null) => {
    if (newFile) {
      setSelectedFile(newFile);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <>
      <LoadDataButton label="Выберите картинку" onChange={handleFilesChange} />
      <UploadedImageInput
        {...arg}
        imageFile={selectedFile}
        onChange={handleFileChange}
      />
    </>
  );
}
