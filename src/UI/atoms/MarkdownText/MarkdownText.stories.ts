import { StoryObj, Meta } from '@storybook/react';

import { MarkdownText } from './MarkdownText';

const markdownText = `
Обычный текст с **жирным** и _курсивом_.

# Заголовок h1

## Заголовок h2

### Заголовок h3

Нумерованный список:
1. Пункт 1
2. Пункт 2
3. Пункт 3

Ненумерованный список:
- Пункт A
- Пункт B
- Пункт C

<select>
  <option value="1">Опция 1</option>
  <option value="2">Опция 2</option>
  <option value="3">Опция 3</option>
</select>
`;

const meta: Meta<typeof MarkdownText> = {
  title: 'Atoms/MarkdownText',
  component: MarkdownText,
};

export default meta;

type Story = StoryObj<typeof MarkdownText>;

export const Default: Story = {
  args: {
    markdown: markdownText,
  },
};
