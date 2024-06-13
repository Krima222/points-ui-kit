import React from 'react';

import { IResidencePermitInfo } from '@/common/types/country';
import { Text } from '@/components/UI/atoms/Text';
import { ResidencePermitInfoParameter } from '@/components/UI/molecules/ResidencePermitInfoParameter';

import classes from './ResidencePermitInfo.module.scss';

interface IProps {
  residencePermit: IResidencePermitInfo;
}

export function ResidencePermitInfo({ residencePermit }: IProps) {
  const { description, params } = residencePermit;
  const paramsNoIcons = [...params].filter((parameter) => !parameter.icon);
  const paramsWithIcons = [...params].filter((parameter) => !!parameter.icon);

  const lastParamNoIcon = paramsNoIcons.length % 2 !== 0 && paramsNoIcons.pop();
  const lastParamWithIcon =
    paramsWithIcons.length % 2 !== 0 && paramsWithIcons.pop();

  const paramsNoIconsList = paramsNoIcons.map((parameter) => (
    <ResidencePermitInfoParameter
      key={parameter.description}
      description={parameter.description}
      hasIcon={false}
    />
  ));

  const paramsWithIconsList = paramsWithIcons.map((parameter) => (
    <ResidencePermitInfoParameter
      key={parameter.description}
      description={parameter.description}
      icon={parameter.icon}
      hasIcon
    />
  ));

  return (
    <div className={classes.residencePermit}>
      <div className={classes.residencePermit__text}>
        <Text as="h2" variant="h2">
          Для кого
        </Text>

        <Text variant="large">{description}</Text>
      </div>

      <div className={classes.residencePermit__parameters}>
        <div className={classes.residencePermit__noIcons}>
          {paramsNoIconsList}
        </div>

        {lastParamNoIcon && (
          <ResidencePermitInfoParameter
            description={lastParamNoIcon.description}
            hasIcon={false}
          />
        )}

        <div className={classes.residencePermit__withIcons}>
          {paramsWithIconsList}
        </div>

        {lastParamWithIcon && (
          <ResidencePermitInfoParameter
            description={lastParamWithIcon.description}
            icon={lastParamWithIcon.icon}
            hasIcon
            className={classes.residencePermit__withIcon_row}
          />
        )}
      </div>
    </div>
  );
}
