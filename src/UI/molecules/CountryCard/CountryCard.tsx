import { Text } from '../../atoms/Text';

import classes from './CountryCard.module.scss';

interface IProps {
  country: string;
  rent: number;
  weather: string;
  food: number;
  img?: string;
  onClick: () => void;
}

export function CountryCard({
  country,
  rent,
  weather,
  food,
  img,
  onClick,
}: IProps) {
  return (
    <button className={classes.card} onClick={onClick}>
      <Text variant="h3">{country}</Text>
      <div className={classes.card__wrapper}>
        <div className={classes.card__img}>
          <img src={img} alt="country" />
        </div>
        <div className={classes.card__description}>
          <div className={classes.card__inform}>
            <Text variant="h4">Аренда</Text>
            <Text variant="h4">{rent} $</Text>
          </div>
          <div className={classes.card__inform}>
            <Text variant="h4">Еда</Text>
            <Text variant="h4">{food} $</Text>
          </div>
          <div className={classes.card__inform}>
            <Text variant="h4">Погода</Text>
            <Text variant="h4">{weather} $</Text>
          </div>
        </div>
      </div>
    </button>
  );
}
