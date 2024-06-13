import React from 'react';

import { ICountryCardInfo } from '@/common/types';
import { Text } from '@/components/UI/atoms/Text';
import { CountryCard } from '@/components/UI/molecules/CountryCard';

import classes from './ChooseCountry.module.scss';

interface IProps {
  countriesInfo: ICountryCardInfo[];

  countryCardHandleClick?: (countryId: string) => void;
}

export function ChooseCountry({
  countriesInfo,
  countryCardHandleClick,
}: IProps) {
  const countriesList = countriesInfo.map((country) => (
    <CountryCard
      {...country}
      key={country.id}
      onClick={() => {
        if (countryCardHandleClick) {
          countryCardHandleClick(country.id);
        }
      }}
    />
  ));

  return (
    <div className={classes.chooseCountry}>
      <Text as="h2" variant="h2" className={classes.chooseCountry__title}>
        Давай начнем с выбора страны
      </Text>

      <div className={classes.chooseCountry__list}>{countriesList}</div>
    </div>
  );
}
