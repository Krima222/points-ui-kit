import cx from 'clsx';

import classes from './ProgressBar.module.scss';

interface IProps {
  progress: number;
  max?: number;
  className?: string;
  transitionTime?: number;
}

export function ProgressBar({
  progress,
  max = 100,
  className,
  transitionTime,
}: IProps) {
  const validProgress = getProgressFromMaxProgress(progress, max);

  const transition =
    transitionTime !== undefined ? `width ${transitionTime}s` : undefined;

  return (
    <div className={cx(classes.progressBar, className)}>
      <div
        className={cx(classes.progressBar__progress)}
        style={{
          width: `${validProgress}%`,
          transition,
        }}
      >
        <div
          className={classes.progressBar__filling}
          style={{
            width: `${10000 / validProgress}%`,
            transition,
          }}
        />
      </div>
    </div>
  );
}

function getProgressFromMaxProgress(progress: number, max?: number) {
  if (max) {
    const progressPercentage = Math.round((progress / max) * 100);

    if (progressPercentage > 100) {
      return 100;
    }

    return progressPercentage;
  }

  return progress;
}
