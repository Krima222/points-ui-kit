import { IResidencePermitInfo } from '@/common/types/country';

export const residencePermitInfo: IResidencePermitInfo[] = [
  {
    id: 'digitalNomad',
    title: 'Для цифровых качевников',
    description: 'Для тех, кто планирует открывать бизнес в новой стране',
    params: [
      {
        description: 'От $1400',
      },
      {
        description: '1 - 2 мес',
      },
      {
        description: 'Удаленный доход от $1200',
      },
      {
        description: 'полный пакет документов',
        icon: '💼',
      },
      {
        description: 'все инстанции',
        icon: '🏢',
      },
      {
        description: 'откроем фирму',
        icon: '📝',
      },
      {
        description: 'откроем счет в банке',
        icon: '💸',
      },
      {
        description: 'подадим документы на ВНЖ',
        icon: '🏡',
      },
      {
        description: 'свяжем с проверенным бухгалтером',
        icon: '🧑‍💼',
      },
      {
        description: 'будем с вами рядом, если возникнут вопросы',
        icon: '📱',
      },
    ],
  },
];
