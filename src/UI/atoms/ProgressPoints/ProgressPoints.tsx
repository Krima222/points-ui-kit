import cx from 'clsx';

import { Text } from '../Text';

import ImgCheck from './Mark.png';

import classes from './ProgressPoints.module.scss';

interface IProps {
  steps: {
    title: string;
    count: number;
    progress?: number;
  }[];
}

export function ProgressPoints({ steps }: IProps) {
  return (
    <div className={classes.progress}>
      {steps.map((step) => (
        <div className={classes.progress__step}>
          <div className={classes.progress__substeps}>
            {renderSubSteps(step.count, step.progress)}

            {step.progress === step.count && (
              <div className={classes.progress__point_end}>
                <img src={ImgCheck.src} alt="check" />
              </div>
            )}
          </div>

          <Text color={step.progress ? 'black' : 'gray70'}>{step.title}</Text>
        </div>
      ))}
    </div>
  );
}

function renderSubSteps(count: number, progress = 0) {
  const subItems = [];

  for (let i = 1; i <= count; i += 1) {
    subItems.push(
      <div
        key={i}
        className={cx(classes.progress__point, {
          [classes.progress__point_active]: i <= progress,
          [classes.progress__point_last]: i === progress,
        })}
      />,
    );
  }

  return subItems;
}
