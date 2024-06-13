import { Icon24Px, Icon24PxColor } from '../Icon24Px';
import { Text } from '../Text';

import classes from './Notification.module.scss';

interface IProps {
  iconColor: Icon24PxColor;
  text?: string;
}

export function Notification({ text, iconColor }: IProps) {
  return (
    <div className={classes.notification}>
      <Icon24Px name="info" color={iconColor} />
      <Text variant="middle">{text}</Text>
    </div>
  );
}
