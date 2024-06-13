'use client';

import { Logo } from '@/components/UI/atoms/Logo';

import classes from './MenuLayout.module.scss';

interface IProps {
  children: React.ReactNode[];
}

export function MenuLayout({ children }: IProps) {
  return (
    <nav className={classes.menuLayout}>
      <div className={classes.menuLayout__logo}>
        <Logo />
      </div>
      <ul className={classes.menuLayout__list}>
        {children.map((child, i) => (
          <li key={i}>{child}</li> // eslint-disable-line
        ))}
      </ul>
    </nav>
  );
}
