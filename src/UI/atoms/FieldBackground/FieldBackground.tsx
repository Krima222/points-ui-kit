import cx from 'clsx';

import classes from './FieldBackground.module.scss';

interface IProps {
  field: React.ReactNode;
  details?: React.ReactNode[];
  variant?: 'field' | 'subfield';
  fieldClassName?: string;
}

export function FieldBackground({
  field,
  details,
  variant = 'field',
  fieldClassName,
}: IProps) {
  return (
    <div className={cx(classes.fieldBackground, classes[variant])}>
      <label className={cx(classes.fieldBackground__main, fieldClassName)}>
        {field}
      </label>
      {details && details.length ? (
        <div className={classes.fieldBackground__details}>{details}</div>
      ) : null}
    </div>
  );
}
