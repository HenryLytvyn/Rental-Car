'use client';

import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary';
import DoubleInput from '@/components/DoubleInput/DoubleInput';
import SelectPrimary from '@/components/SelectPrimary/SelectPrimary';
import css from './Catalog.module.css';
import { useState } from 'react';
import { getCars } from '@/lib/api/api';
import type { QueryCarsType } from '@/types/apiRequest/apiRequest';
import { DoubleInputValuesType } from '@/types/DoubleInput/DoubleInput';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import CarsList from '@/components/CarsList/CarsList';
import BackgroundOverlay from '@/components/BackgroundOverlay/BackgroundOverlay';
import Loader from '@/components/Loader/Loader';
import { useLockScroll } from '@/lib/hooks/useLockScroll';

export default function CatalogClient() {
  const [query, setQuery] = useState<QueryCarsType>({ limit: '12', page: '1' });

  const { data, error, isFetching, refetch } = useQuery({
    queryKey: ['cars'],
    queryFn: () => getCars(query),
    placeholderData: keepPreviousData,
  });

  useLockScroll(isFetching);

  function updateQuery(key: keyof QueryCarsType, value: string) {
    setQuery({
      ...query,
      [key]: value,
    });
  }

  function handleDoubleInput(value: DoubleInputValuesType) {
    setQuery(prev => ({
      ...prev,
      minMileage: value.from ? value.from.replace(/ /g, '') : '',
      maxMileage: value.to ? value.to.replace(/ /g, '') : '',
    }));
  }

  async function handleSearch() {
    const minMileageNumber = Number(query.minMileage);
    const maxMileageNumber = Number(query.maxMileage);

    if (maxMileageNumber < minMileageNumber) {
      setQuery({
        ...query,
        maxMileage: String(minMileageNumber + 500),
      });
    }

    // if (maxMileageNumber < minMileageNumber) {
    //   setQuery(prev => ({
    //     ...prev,
    //     maxMileage: String(minMileageNumber + 500),
    //   }));
    // }

    console.log(query);
    await refetch();
  }

  return (
    <>
      <div className={css.catalogContainer}>
        <ul className={css.filtersList}>
          <li className={css.filterItem}>
            <p className={css.selectTitle}>Car brand</p>
            <SelectPrimary
              width={204}
              height={272}
              options={[
                'Aston Martin',
                'Audi',
                'BMW',
                'Bentley',
                'Buick',
                'Chevrolet',
                'Chrysler',
                'GMC',
                'HUMMER',
                'Hyundai',
                'Kia',
                'Lamborghini',
                'Land Rover',
                'Lincoln',
                'MINI',
                'Mercedes-Benz',
                'Mitsubishi',
                'Nissan',
                'Pontiac',
                'Subaru',
                'Volvo',
              ]}
              placeholder="Choose a brand"
              handleChange={value => updateQuery('brand', value)}
            />
          </li>

          <li className={css.filterItem}>
            <p className={css.selectTitle}>Price/ 1 hour</p>
            <SelectPrimary
              width={196}
              height={188}
              options={['30', '40', '50', '60', '70', '80', '90', '100']}
              placeholder="Choose a price"
              handleChange={value => updateQuery('rentalPrice', value)}
              symbolBeforeValue="$"
            />
          </li>

          <li>
            <p className={css.selectTitle}>Car mileage / km</p>
            <DoubleInput
              handleChange={value => {
                handleDoubleInput(value);
              }}
            />
          </li>
        </ul>
        <ButtonPrimary handleClick={handleSearch} width={156} text="Search" />
      </div>
      {data && data.cars.length > 0 && <CarsList items={data.cars} />}

      {isFetching && (
        <>
          <BackgroundOverlay isActive={true} isOverAll={true} />
          <div className="loaderContainer">
            <Loader />
          </div>
        </>
      )}
    </>
  );
}
