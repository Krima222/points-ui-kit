import React from 'react';

import { ICountryAbout } from '@/common/types/country';
import { Text } from '@/components/UI/atoms/Text';
import { AboutCountryParameter } from '@/components/UI/molecules/AboutCountryParameter';

import classes from './About.module.scss';

interface IProps {
  image: string;
  countryName: string;
  aboutCountry: ICountryAbout;
}

export function About({ image, countryName, aboutCountry }: IProps) {
  const parametersList = aboutCountry.parameters.map((aboutParameter) => (
    <AboutCountryParameter
      key={aboutParameter.title}
      title={aboutParameter.title}
      parameter={aboutParameter.parameter}
    />
  ));

  return (
    <div className={classes.about}>
      <div className={classes.about__content}>
        <Text variant="large">{aboutCountry.description}</Text>

        <img
          className={classes.about__image}
          width={372}
          height={352}
          src={image}
          alt={countryName}
        />
      </div>

      <div className={classes.about__parameters}>{parametersList}</div>
    </div>
  );
}
