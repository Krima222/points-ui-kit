import type { ILinkData } from './types';

export const links: ILinkData[] = [
  {
    label: 'Главная',
    iconName: 'home',
    href: '/main',
    paths: ['/main'],
  },
  {
    label: 'Услуги',
    iconName: 'shop',
    href: '/main/service',
    paths: ['/main/service'],
  },
  {
    label: 'Квесты',
    iconName: 'checklist',
    href: '/main/quest',
    paths: ['/main/quest', '/main/subquest', '/task'],
  },
  {
    label: 'Медиа',
    iconName: 'media',
    href: '/main/media',
    paths: ['/main/media'],
  },
  {
    label: 'Профиль',
    iconName: 'person',
    href: '/main/profile',
    paths: ['/main/profile'],
  },
];
