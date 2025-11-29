import { getCarById } from '@/lib/api/api';
import css from './CarInfo.module.css';
import Image from 'next/image';
import { Icon } from '@/components/Icon/Icon';
import getAddress from '@/utils/getAddress';
import formatThousands from '@/utils/formatThousands';
import CarBookingForm from '@/components/CarBookingForm/CarBookingForm';
import { Metadata } from 'next';
import { CarType } from '@/types/apiResponse/apiResponse';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CarInfo({ params }: Props) {
  const { id } = await params;
  const car: CarType = await getCarById(id);

  return (
    <div className={`container ${css.carInfoContainer}`}>
      <div className={css.leftSidebar}>
        <Image
          src={car.img}
          alt={car.description}
          width={640}
          height={512}
          className={css.carPicture}
        />
        <CarBookingForm carId={id} />
      </div>
      <div className={css.rightSidebar}>
        <div className={css.commonInfoBlock}>
          <h1
            className={css.mainTitle}
          >{`${car.brand} ${car.model}, ${car.year}`}</h1>
          <p className={css.idMarkUp}>Id: 9582</p>
          <div className={css.additionInfoWrapper}>
            <Icon name="icon-location" className={css.locationIcon} />
            <address
              className={css.address}
            >{`${getAddress('city', car.address)}, ${getAddress('country', car.address)}`}</address>
            <p
              className={css.mileage}
            >{`Mileage: ${formatThousands(String(car.mileage))} km`}</p>
          </div>
          <p className={css.price}>${car.rentalPrice}</p>
          <p className={css.description}>{car.description}</p>
        </div>
        <ul className={css.rentFeaturesList}>
          <li className={css.rentFeaturesItem}>
            <h2 className={css.rentFeaturesTitle}>Rental Conditions: </h2>
            <ul className={css.detailedFeaturesList}>
              <li className={css.detailedFeaturesItem}>
                <Icon
                  name="icon-check-circle"
                  className={css.detailedFeaturesIcon}
                />
                <p className={css.detailedFeaturesText}>Minimum age : 25</p>
              </li>
              <li className={css.detailedFeaturesItem}>
                <Icon
                  name="icon-check-circle"
                  className={css.detailedFeaturesIcon}
                />
                <p className={css.detailedFeaturesText}>
                  Security deposite required{' '}
                </p>
              </li>
              <li className={css.detailedFeaturesItem}>
                <Icon
                  name="icon-check-circle"
                  className={css.detailedFeaturesIcon}
                />
                <p className={css.detailedFeaturesText}>
                  Valid driver’s license
                </p>
              </li>
            </ul>
          </li>

          <li className={css.rentFeaturesItem}>
            <h2 className={css.rentFeaturesTitle}>Car Specifications:</h2>
            <ul className={css.detailedFeaturesList}>
              <li className={css.detailedFeaturesItem}>
                <Icon
                  name="icon-calendar"
                  className={css.detailedFeaturesIcon}
                />
                <p className={css.detailedFeaturesText}>Year: {car.year}</p>
              </li>
              <li className={css.detailedFeaturesItem}>
                <Icon name="icon-car" className={css.detailedFeaturesIcon} />
                <p className={css.detailedFeaturesText}>Type: {car.type}</p>
              </li>
              <li className={css.detailedFeaturesItem}>
                <Icon
                  name="icon-fuel-pump"
                  className={css.detailedFeaturesIcon}
                />
                <p className={css.detailedFeaturesText}>
                  Fuel Consumption: {car.fuelConsumption}
                </p>
              </li>
              <li className={css.detailedFeaturesItem}>
                <Icon name="icon-gear" className={css.detailedFeaturesIcon} />
                <p className={css.detailedFeaturesText}>
                  Engine Size: {car.engineSize}
                </p>
              </li>
            </ul>
          </li>

          <li className={css.rentFeaturesItem}>
            <h2 className={css.rentFeaturesTitle}>
              Accessories and functionalities:
            </h2>
            <ul className={css.detailedFeaturesList}>
              {car.accessories.map(item => (
                <li key={item} className={css.detailedFeaturesItem}>
                  <Icon
                    name="icon-check-circle"
                    className={css.detailedFeaturesIcon}
                  />
                  <p className={css.detailedFeaturesText}>{item}</p>
                </li>
              ))}

              {car.functionalities.map(item => (
                <li key={item} className={css.detailedFeaturesItem}>
                  <Icon
                    name="icon-check-circle"
                    className={css.detailedFeaturesIcon}
                  />
                  <p className={css.detailedFeaturesText}>{item}</p>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const car: CarType = await getCarById(id);
  const carFullName = `${car.brand} ${car.model} (${car.year})`;

  return {
    title: `Rent ${carFullName} – ${car.type}, ${car.engineSize} Engine`,
    description: `Rent the ${carFullName} for $${car.rentalPrice}/hour. Mileage: ${car.mileage} km, Fuel consumption: ${car.fuelConsumption}. Features: ${(
      car.accessories || []
    ).join(
      ', '
    )}, ${(car.functionalities || []).join(', ')}. Book your car now!`,
    keywords: `car rental, rent a car, ${car.brand}, ${car.model}, ${car.type}, vehicle rental, ${car.engineSize}, ${car.fuelConsumption}, ${car.rentalPrice}`,
    authors: [
      {
        name: 'Henry Lytvyn',
        url: 'https://www.linkedin.com/in/henry-lytvyn/',
      },
    ],
    robots: 'index, follow',
    openGraph: {
      title: `Rent ${carFullName} – Detailed Info & Booking`,
      description: `Explore the ${carFullName} with full specifications, rental conditions, mileage ${car.mileage} km, and fuel consumption ${car.fuelConsumption}. Book now for $${car.rentalPrice}/hour.`,
      url: `https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app/catalog/${car.id}`,
      siteName: 'RentalCar',
      type: 'website',
      images: [
        {
          url: `https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app${car.img}`,
          width: 1200,
          height: 630,
          alt: `${carFullName} preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rent ${carFullName} – Book Now`,
      description: `Rent the ${carFullName} for $${car.rentalPrice}/hour. Mileage: ${car.mileage} km, Fuel consumption: ${car.fuelConsumption}. Book online today!`,
      images: [
        `https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app${car.img}`,
      ],
    },
  };
}
