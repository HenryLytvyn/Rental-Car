import { getCarById } from '@/lib/api/api';
import css from './CarInfo.module.css';
import Image from 'next/image';
import { Icon } from '@/components/Icon/Icon';
import getAddress from '@/utils/getAddress';
import formatThousands from '@/utils/formatThousands';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CarInfo({ params }: Props) {
  const { id } = await params;
  const car = await getCarById(id);

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
      </div>
      <div className={css.rightSidebar}>
        <div className={css.commonInfoBlock}>
          <h1
            className={css.mainTitle}
          >{`${car.brand} ${car.model}, ${car.year}`}</h1>
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
