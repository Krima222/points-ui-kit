import Image from 'next/image';

import { UnviewedIndicator } from '@/components/UI/atoms/UnviewedIndicator';

import classes from './StoryCard.module.scss';

interface IProps {
  unviewed: boolean;
  img: string;
}

export function StoryCard({ unviewed, img }: IProps) {
  return (
    <UnviewedIndicator active={unviewed}>
      <Image
        src={img}
        alt="story"
        width={96}
        height={96}
        className={classes.story}
      />
    </UnviewedIndicator>
  );
}
