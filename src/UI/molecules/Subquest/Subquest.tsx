import { useState } from 'react';

import cx from 'clsx';

import { Icon32Px } from '@/components/UI/atoms/Icon32Px';
import { Text } from '@/components/UI/atoms/Text/Text';

import classes from './Subquest.module.scss';

interface IProps {
  title: string;
  state: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  tasks?: React.ReactNode[] | boolean;
}

export function Subquest({
  title,
  state,
  onClick,
  className,
  disabled,
  tasks,
}: IProps) {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    if (tasks) {
      setIsOpened((current) => !current);
    } else {
      onClick?.();
    }
  }

  return (
    <div className={classes.wrapper}>
      <button
        className={cx(classes.subquest, className)}
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        <div className={classes.subquest__content}>
          {state}

          <Text as="h2" variant="large">
            {title}
          </Text>
        </div>

        <div
          className={cx(classes.subquest__icon, {
            [classes.subquest__icon_closed]: tasks && !isOpened,
            [classes.subquest__icon_opened]: tasks && isOpened,
          })}
        >
          <Icon32Px name="arrowForward" color="blue" />
        </div>
      </button>

      {isOpened && tasks}
    </div>
  );
}
