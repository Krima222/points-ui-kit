import { CSSProperties, useEffect, useRef, useState } from 'react';

import { Icon32Px } from '../Icon32Px';

import classes from './UploadedImageInput.module.scss';

interface IProps {
  imageFile: File | null;
  onChange: (newImageFile: File | null) => void;
}

export function UploadedImageInput({ imageFile, onChange }: IProps) {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;
    onChange(selectedFile);
  };

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setObjectUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
    return () => {};
  }, [imageFile]);

  const fileInputStyles: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
  };

  return objectUrl ? (
    <div className={classes.container}>
      <button onClick={handleClick} className={classes.container__button}>
        <img src={objectUrl} alt="uploaded" />
        <div className={classes.container__icon}>
          <Icon32Px name="camera" color="white" />
        </div>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className={classes.file__input}
        accept="image/*"
        onChange={handleFileChange}
        style={fileInputStyles}
      />
    </div>
  ) : null;
}
