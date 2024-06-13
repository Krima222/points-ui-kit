'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon24PxWithLabel } from '../../atoms/Icon24PxWithLabel';

import { MenuLayout } from './MenuLayout';
import { links } from './config';

import classes from './MenuLayout.module.scss';

export function Menu() {
  const pathname = usePathname();
  const textDecorationStyle = {
    textDecoration: 'none',
  };

  const activePath = getActive(pathname);

  return (
    <MenuLayout>
      {links.map((link) => (
        <Link key={link.label} href={link.href} style={textDecorationStyle}>
          <Icon24PxWithLabel
            className={classes.menu}
            iconName={link.iconName}
            label={link.label}
            color={
              link.paths.find((path) => path === activePath)
                ? 'primaryGradient'
                : 'gray20'
            }
          />
        </Link>
      ))}
    </MenuLayout>
  );
}

function getActive(currentPath: string) {
  const actives: string[] = [];

  links.forEach((link) => {
    link.paths.forEach((path) => {
      if (currentPath.startsWith(path)) {
        actives.push(path);
      }
    });
  });

  let mostSpecific = actives[0];
  let { length } = mostSpecific;

  for (let i = 1; i < actives.length; i += 1) {
    const item = actives[i];

    if (item.length > length) {
      mostSpecific = item;
      length = item.length;
    }
  }

  return mostSpecific;
}
