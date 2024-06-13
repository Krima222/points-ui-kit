import React from 'react';

import { TStatusIconStatus } from '@/common/types';
import { Icon32Px } from '@/components/UI/atoms/Icon32Px';
import { StatusIcon } from '@/components/UI/atoms/StatusIcon';
import { Text } from '@/components/UI/atoms/Text/Text';

import classes from './Task.module.scss';

interface IProps {
  title: string;
  status: TStatusIconStatus;
  onClick?: () => void;
  specificDateInfo?: string;
  specificDate?: string;
}

export function Task({
  title,
  specificDateInfo,
  specificDate,
  status,
  onClick,
}: IProps) {
  const isTaskNotAvailable = status === 'notAvailable';
  const hasSpecificDate = status === 'inProcessWithSpecificDate';
  const hasSpecificDateOrInfo = specificDate || specificDateInfo;

  return (
    <button
      className={classes.task}
      type="button"
      onClick={onClick}
      disabled={isTaskNotAvailable}
    >
      <div className={classes.task__content}>
        <div className={classes.task__info}>
          <StatusIcon status={status} />

          <Text variant="large" color={isTaskNotAvailable ? 'gray30' : 'black'}>
            {title}
          </Text>
        </div>

        <div className={classes.task__icon}>
          <Icon32Px name="arrowForward" color="blue" />
        </div>
      </div>

      {hasSpecificDate && hasSpecificDateOrInfo && (
        <div className={classes.task__specificDate}>
          <Text variant="small" color="gray70">
            {specificDateInfo}
          </Text>

          <Text variant="small" color="black">
            {specificDate && <>({specificDate})</>}
          </Text>
        </div>
      )}
    </button>
  );
}
