import Image from 'next/image';
import css from './CarCard.module.css';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import LinkPrimary from '../LinkPrimary/LinkPrimary';

interface CarCardProps {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  mileage: number;
}

interface Props {
  car: CarCardProps;
}

export default function CarCard({ car }: Props) {
  function getAddress(
    countryOrCity: 'country' | 'city',
    addressString: string
  ) {
    const arrAddress = addressString
      .split(' ')
      .map(el => (el.endsWith(',') ? el.slice(0, -1) : el));

    if (countryOrCity === 'city') return arrAddress[arrAddress.length - 2];
    if (countryOrCity === 'country') return arrAddress[arrAddress.length - 1];
  }

  return (
    <div className={css.card}>
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
        <p className={css.secondaryText}>{car.type}</p>
        <div className={css.divider}></div>
        <p className={css.secondaryText}>{car.mileage}</p>
      </div>
      <LinkPrimary width={276} text="Read more" page="/" />
    </div>
  );
}
