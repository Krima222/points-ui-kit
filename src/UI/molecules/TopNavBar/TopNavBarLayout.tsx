import classes from './TopNavBarLayout.module.scss';

interface IProps {
  children: [React.ReactNode, React.ReactNode];
}

export function TopNavBarLayout({ children }: IProps) {
  return <div className={classes.topNavBarLayout}>{children}</div>;
}
