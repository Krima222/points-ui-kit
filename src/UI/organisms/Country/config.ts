import { ICountry } from '@/common/types/country';
import montenegro from '@/public/images/media/montenegro.jpg';

export const countries: ICountry[] = [
  {
    id: 'montenegro',
    name: 'Черногория',
    image: montenegro.src,
    about: {
      description:
        'Небольшое государство на западе Балканского полуострова, европейская страна на берегу Адриатического моря, на две трети состоящая из гор.',
      parameters: [
        {
          title: 'Перелет',
          parameter: '600–1 000 $',
        },
        {
          title: 'Еда на месяц',
          parameter: '400–800 $',
        },
        {
          title: 'Жилье на месяц',
          parameter: '400–1 000 $',
        },
        {
          title: 'Погода зима/лето',
          parameter: '+7/+27',
        },
        {
          title: 'Легализация',
          parameter: 'от 450 $',
        },
        {
          title: 'Инфраструктура',
          parameter: '4/10',
        },
      ],
    },
    residencePermits: [
      {
        id: 'digital',
        title: 'ВНЖ для цифровых кочевников',
        description: 'Для тех, кто планирует открывать бизнес в новой стране',
        cost: '300',
        amountOfDays: '1 - 3 дня',
        requirements: 'Простые требования к документам',
      },
      {
        id: 'doo',
        title: 'ВНЖ по открытию фирмы',
        description: 'Для тех, кто планирует открывать бизнес в новой стране',
        cost: '300',
        amountOfDays: '1 - 3 дня',
        requirements: 'Простые требования к документам',
      },
      {
        id: 'digital',
        title: 'ВНЖ для цифровых кочевников',
        description: 'Для тех, кто планирует открывать бизнес в новой стране',
        cost: '300',
        amountOfDays: '1 - 3 дня',
        requirements: 'Простые требования к документам',
      },
    ],
  },
];
