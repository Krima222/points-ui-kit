import React from 'react';

import { IResidencePermitCard } from '@/common/types/country';
import { ResidencePermitCard } from '@/components/UI/molecules/ResidencePermitCard';

interface IProps {
  residencePermitCard: IResidencePermitCard;
  residencePermitHandleCLick: () => void;
}

export function ResidencePermit({
  residencePermitCard,
  residencePermitHandleCLick,
}: IProps) {
  const { title, description, cost, amountOfDays, requirements } =
    residencePermitCard;

  return (
    <ResidencePermitCard
      title={title}
      description={description}
      cost={cost}
      amountOfDays={amountOfDays}
      requirements={requirements}
      details="Подробнее о ВНЖ"
      onClick={residencePermitHandleCLick}
    />
  );
}
