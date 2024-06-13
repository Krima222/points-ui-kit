import React, { useState } from 'react';

import clsx from 'clsx';

import { ICountry } from '@/common/types/country';
import { Text } from '@/components/UI/atoms/Text';
import { SegmentedControls } from '@/components/UI/molecules/SegmentedControls';
import { About } from '@/components/UI/organisms/Country/About';
import { ResidencePermit } from '@/components/UI/organisms/Country/ResidencePermit';
import { countries } from '@/components/UI/organisms/Country/config';

import classes from './Country.module.scss';

interface IProps {
  id: string;
  residencePermitHandleClick: (residencePermitId: string) => void;
}

interface ICountryProps {
  country: ICountry;
  residencePermitHandleClick: (residencePermitId: string) => void;
}

export function Country({ id, residencePermitHandleClick }: IProps) {
  const currentCountry = countries.find((country) => country.id === id);

  const noCountryBlock = <>Нет страны</>;

  return (
    <div className={classes.country}>
      {currentCountry ? (
        <CountryBlock
          country={currentCountry}
          residencePermitHandleClick={residencePermitHandleClick}
        />
      ) : (
        noCountryBlock
      )}
    </div>
  );
}

function CountryBlock({ country, residencePermitHandleClick }: ICountryProps) {
  const [isAboutInfoVisible, setIsAboutInfoVisible] = useState(false);

  const { image, name, residencePermits, about } = country;

  const residencePermitsList = residencePermits.map((residencePermit) => (
    <ResidencePermit
      key={residencePermit.id}
      residencePermitCard={residencePermit}
      residencePermitHandleCLick={() =>
        residencePermitHandleClick(residencePermit.id)
      }
    />
  ));

  return (
    <>
      <img
        className={clsx(classes.country__image, classes.country__image_none)}
        src={image}
        alt={name}
      />

      <Text as="h2" variant="h2" className={classes.country__title}>
        {name}
      </Text>

      <div className={classes.country__controls}>
        <SegmentedControls
          option1Text="Виды ВНЖ"
          option2Text="О Стране"
          onChange={() => setIsAboutInfoVisible(!isAboutInfoVisible)}
        />
      </div>

      <div
        className={clsx(classes.country__content, {
          [classes.country__content_about]: isAboutInfoVisible,
        })}
      >
        {isAboutInfoVisible ? (
          <About image={image} countryName={name} aboutCountry={about} />
        ) : (
          residencePermitsList
        )}
      </div>
    </>
  );
}
