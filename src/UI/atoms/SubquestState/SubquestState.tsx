import React from 'react';

import cx from 'clsx';

import { SubquestStates } from './assets';

import classes from './SubquestState.module.scss';

interface IProps {
  type: keyof typeof SubquestStates;
  amountOfDoneTasks?: number | string;
  amountOfTasksToDo?: number | string;
}

export function SubquestState({
  type,
  amountOfTasksToDo,
  amountOfDoneTasks,
}: IProps) {
  const state = SubquestStates[type]({
    amountOfTasksToDo,
    amountOfDoneTasks,
  });
  return (
    <div
      className={cx(classes.subquestState, {
        [classes.subquestState_blue]: type === 'actual',
      })}
    >
      {state}
    </div>
  );
}
