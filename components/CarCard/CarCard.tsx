import Image from 'next/image';
import css from './CarCard.module.css';
import LinkPrimary from '../LinkPrimary/LinkPrimary';
import getAddress from '@/utils/getAddress';
import { CarType } from '@/types/apiResponse/apiResponse';
import CarCardClient from './CarCard.client';

interface Props {
  car: CarType;
}

export default function CarCard({ car }: Props) {
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

      <CarCardClient id={car.id} />
    </li>
  );
}
