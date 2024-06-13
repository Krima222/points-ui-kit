import React from 'react';

import { Text } from '@/components/UI/atoms/Text/Text';

interface IProps {
  amountOfDoneTasks?: number | string;
  amountOfTasksToDo?: number | string;
}

export function ActualState({
  amountOfDoneTasks,
  amountOfTasksToDo,
}: IProps): React.ReactNode {
  return (
    <Text variant="button" color="white">
      {amountOfDoneTasks}/{amountOfTasksToDo}
    </Text>
  );
}
