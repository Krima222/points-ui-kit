import { IFormQuestion, EFieldType } from '@/common/types/formTypes';

export const nestedFormQuestionObj: IFormQuestion = {
  id: 'exampleForm',
  title: 'C кем вы переезжаете?',

  answers: [
    {
      id: 'parent2',
      label: 'Один',
      name: 'withWho',
      type: EFieldType.radio,

      params: {
        id: '2asfkjjdlksjf3',
        stringValue: 'alone',
        label: 'label',
        name: 'name',
        checked: false,
      },
    },
    {
      id: 'parent1',
      label: 'С близкими и/или знакомыми',
      name: 'withWho',
      type: EFieldType.radio,

      params: {
        id: '23',
        stringValue: 'family and friends',
        label: 'label',
        name: 'name',
        checked: false,
      },
      childrenFields: [
        {
          id: 'partner',
          label: 'Супруг(а)',
          name: 'partner',
          type: EFieldType.checkbox,
          params: {
            id: 'dsjfkjsdlkf',
            label: '',
            name: 'partner',
            stringValue: 'withPartner',
          },
        },
        {
          id: 'children',
          label: 'Дети',
          name: 'children',
          type: EFieldType.counter,
          params: {
            id: '48uwqoi94',
            label: 'label',
            name: 'name',
            numberValue: 0,
            min: 0,
            max: 200,
          },
        },
        {
          id: 'parents',
          label: 'Родители',
          name: 'parents',
          type: EFieldType.counter,
          params: {
            id: '443i923894',
            label: 'label',
            name: 'parents',
            numberValue: 0,
            min: 0,
            max: 200,
          },
        },
        {
          id: 'friends',
          label: 'Друзья',
          name: 'friends',
          type: EFieldType.counter,
          params: {
            id: '9230129',
            label: 'label',
            name: 'friends',
            numberValue: 0,
            min: 0,
            max: 200,
          },
        },
      ],
    },
    {
      id: 'parent2213',
      label: 'С коммерческой компанией (владелец)',
      name: 'withWho',
      type: EFieldType.radio,

      params: {
        id: '2dssdf3',
        stringValue: 'company',
        label: 'label',
        name: 'name',
        checked: false,
      },
    },
    {
      id: 'par213ent2',
      label: 'У меня другой случай',
      name: 'withWho',
      type: EFieldType.radio,

      params: {
        id: '21233',
        stringValue: 'other',
        label: 'label',
        name: 'name',
        checked: false,
      },

      childrenFields: [
        {
          id: 'kdjskfjlskjfdkl',
          label: '',
          name: 'anotherNotation',
          type: EFieldType.textarea,
          params: {
            id: 'dmjsflksjd',
            label: 'Описание вашего случая',
            name: 'textarea',
            stringValue: '',
          },
        },
      ],
    },
  ],
};
