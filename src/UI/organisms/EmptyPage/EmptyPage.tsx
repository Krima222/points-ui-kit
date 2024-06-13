import React from 'react';

import { Button } from '@/components/UI/atoms/Button';
import { ManIcon } from '@/components/UI/atoms/ManIcon';
import { Text } from '@/components/UI/atoms/Text';

import classes from './EmptyPage.module.scss';

interface IProps {
  pageName: string;
  buttonHandleClick: () => void;
}

export function EmptyPage({ pageName, buttonHandleClick }: IProps) {
  return (
    <div className={classes.emptyPage}>
      <Text as="h1" variant="h1" className={classes.emptyPage__header}>
        {pageName}
      </Text>

      <div className={classes.emptyPage__icon}>
        <ManIcon />
      </div>

      <Text as="h3" variant="h3" className={classes.emptyPage__textImage}>
        Раздел находится в разработке
      </Text>

      <Text variant="large" className={classes.emptyPage__subTextImage}>
        Мы откроем его в ближайшее время, а пока можете начать квест
      </Text>

      <div className={classes.emptyPage__button}>
        <Button
          text="Вернуться на главную"
          onClick={() => buttonHandleClick()}
        />
      </div>
    </div>
  );
}
