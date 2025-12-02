import Image from 'next/image';
import css from './CarCard.module.css';
import LinkPrimary from '../LinkPrimary/LinkPrimary';
import getAddress from '@/utils/getAddress';
import { Icon } from '../Icon/Icon';
import useFavouriteList from '@/lib/store/favouriteStore';
import { CarType } from '@/types/apiResponse/apiResponse';

interface Props {
  car: CarType;
}

export default function CarCard({ car }: Props) {
  const { favouriteList, setFavourite } = useFavouriteList();

  function isFavourite() {
    return favouriteList.includes(car.id);
  }

  return (
    <li className={css.card}>
      <div>
        <Image
          src={car.img}
          alt={car.description}
          className={css.image}
          width={276}
          height={268}
        />
        <div className={css.basicInfo}>
          <p className={css.carInfo}>
            {car.brand} <span className={css.model}>{car.model}</span>,{' '}
            {car.year}
          </p>
          <p>${car.rentalPrice}</p>
        </div>
        <div className={css.addressContainer}>
          <p className={css.secondaryText}>{getAddress('city', car.address)}</p>
          <div className={css.divider}></div>
          <p className={css.secondaryText}>
            {getAddress('country', car.address)}
          </p>
          <div className={css.divider}></div>
          <p className={css.secondaryText}>{car.rentalCompany}</p>
          <div className={css.divider}></div>
        </div>
        <div className={css.addressContainer}>
          <p className={css.secondaryText}>{car.type}</p>
          <div className={css.divider}></div>
          <p className={css.secondaryText}>{car.mileage} km</p>
        </div>
      </div>
      <LinkPrimary width={276} text="Read more" page={`/catalog/${car.id}`} />

      {isFavourite() && (
        <button
          className={css.favouriteBtn}
          type="button"
          onClick={() => setFavourite(car.id)}
        >
          <Icon
            name="icon-favourite-active"
            className={`${css.favouriteIcon} ${css.favouriteIconActive}`}
          />
        </button>
      )}

      {!isFavourite() && (
        <button
          className={css.favouriteBtn}
          type="button"
          onClick={() => setFavourite(car.id)}
        >
          <Icon
            name="icon-favourite-default"
            className={`${css.favouriteIcon} ${css.favouriteIconNotActive}`}
          />
        </button>
      )}
    </li>
  );
}
