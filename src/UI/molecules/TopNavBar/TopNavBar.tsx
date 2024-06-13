import { Icon32Px } from '../../atoms/Icon32Px';
import { Text } from '../../atoms/Text';

import { TopNavBarLayout } from './TopNavBarLayout';

interface IProps {
  title: string;
  onBack: () => void;
}

export function TopNavBar({ title, onBack }: IProps) {
  return (
    <TopNavBarLayout>
      <button onClick={onBack}>
        <Icon32Px name="arrowBack" color="gray90" />
      </button>
      <Text as="h1" variant="h3" color="black">
        {title}
      </Text>
    </TopNavBarLayout>
  );
}
