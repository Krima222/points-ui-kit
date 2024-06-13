import { MantineProvider } from '@mantine/core';
import { DateInput, DateInputProps } from '@mantine/dates';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import classes from './DatePicker.module.scss';

interface IProps {
  value?: Date | null;
  onChange?: (selectedDate: Date | null) => void;
  disabled: boolean;
}

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return new Date(1939, 8, 1);
  }
  return new Date(input);
};

export function DatePicker({ value, onChange, disabled }: IProps) {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString();
  const placeholderDate = `${day}.${month}.${year}`;
  return (
    <MantineProvider>
      <DateInput
        dateParser={dateParser}
        value={value}
        onChange={() => onChange}
        valueFormat="DD.MM.YYYY"
        placeholder={placeholderDate}
        classNames={{
          input: classes.input,
        }}
        aria-label="date entry"
        styles={{
          input: {
            padding: 0,
            background: disabled ? '#cfcfcf' : '',
            fontFamily: 'inter, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
          },
        }}
      />
    </MantineProvider>
  );
}
