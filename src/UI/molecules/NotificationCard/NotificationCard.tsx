import cx from 'clsx';

import { StatusIcon } from '../../atoms/StatusIcon';
import { Text } from '../../atoms/Text';

import type { Status } from '../../atoms/StatusIcon/types';

import classes from './NotificationCard.module.scss';

interface IProps {
  status: Status;
  title: string;
  description: string;
}

export function NotificationCard({ status, title, description }: IProps) {
  const cardClassName = cx(classes.card, {
    [classes[status as string]]: status as string,
  });
  return (
    <div className={cardClassName}>
      <div>
        <StatusIcon status={status} />
      </div>
      <div className={classes.card__text}>
        <Text variant="h3">{title}</Text>
        <Text>{description}</Text>
      </div>
    </div>
  );
}
