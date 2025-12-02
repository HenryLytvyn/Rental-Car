'use client';

import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary';
import DoubleInput from '@/components/DoubleInput/DoubleInput';
import SelectPrimary from '@/components/SelectPrimary/SelectPrimary';
import css from './Catalog.module.css';
import { getCars } from '@/lib/api/api';
import type { QueryCarsType } from '@/types/apiRequest/apiRequest';
import { DoubleInputValuesType } from '@/types/DoubleInput/DoubleInput';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import CarsList from '@/components/CarsList/CarsList';
import BackgroundOverlay from '@/components/BackgroundOverlay/BackgroundOverlay';
import Loader from '@/components/Loader/Loader';
import { useLockScroll } from '@/lib/hooks/useLockScroll';
import useCarsFilters from '@/lib/store/CarsFiltersStore';
import useCarsStore from '@/lib/store/CarsStore';
import { CarsResponseType } from '@/types/apiResponse/apiResponse';
import { useEffect, useState } from 'react';
import { catalogInitialQuery } from '@/constants/constants';
import mileAgeValidation from '@/utils/mileAgeValidation';

interface Props {
  brands: string[];
}

export default function CatalogClient({ brands }: Props) {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [query, setQuery] = useState<QueryCarsType>(catalogInitialQuery);
  const { carsList, rewriteCarsList, addCarsToList } = useCarsStore();
  const { queryStore, setQueryStore } = useCarsFilters();
  const queryClient = useQueryClient();

  const { data, error, isFetching, refetch } = useQuery<CarsResponseType>({
    queryKey: ['cars'],
    queryFn: () => getCars(queryStore),
    placeholderData: previous => previous,
    enabled: carsList.length === 0,
  });

  // useEffect(() => {
  //   if (data?.cars) {
  //     rewriteCarsList(data.cars);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   if (queryStore !== catalogInitialQuery) setQuery(queryStore);
  // }, []);

  useLockScroll(isFetching);

  async function handleSearch() {
    setQueryStore(query);

    mileAgeValidation();
    setQuery(useCarsFilters.getState().queryStore);

    await new Promise(r => setTimeout(r));
    // waiting one tick of the event loop so React can process the state update and trigger a re-render

    await refetch();
  }

  async function handleLoadMore() {
    setIsLoadingMore(true);
    const nextPage = Number(data?.page) + 1;

    const res = await getCars({
      ...queryStore,
      page: String(nextPage),
    });

    addCarsToList(res.cars);

    queryClient.setQueryData(['cars'], {
      ...res,
      cars: [...carsList, ...res.cars],
    });

    setIsLoadingMore(false);
  }

  function updateQuery(key: keyof QueryCarsType, value: string) {
    setQuery({
      ...query,
      [key]: value,
    });
  }

  function handleDoubleInput(value: DoubleInputValuesType) {
    setQuery({
      ...query,
      minMileage: value.from,
      maxMileage: value.to,
    });
  }

  return (
    <div className={css.catalogContainer}>
      <div className={css.filtersContainer}>
        <ul className={css.filtersList}>
          <li className={css.filterItem}>
            <p className={css.selectTitle}>Car brand</p>
            <SelectPrimary
              width={204}
              height={272}
              options={brands}
              placeholder="Choose a brand"
              value={query.brand}
              handleChange={value => updateQuery('brand', value)}
            />
          </li>

          <li className={css.filterItem}>
            <p className={css.selectTitle}>Price/ 1 hour</p>
            <SelectPrimary
              width={196}
              height={188}
              options={['30', '40', '50', '60', '70', '80', '90', '100']}
              placeholder={
                !query.rentalPrice ? 'Choose a price' : query.rentalPrice
              }
              value={query.rentalPrice}
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
              valuesTo={query.maxMileage}
              valuesFrom={query.minMileage}
            />
          </li>
        </ul>
        <ButtonPrimary handleClick={handleSearch} width={156} text="Search" />
      </div>

      <CarsList cars={carsList} />

      {isLoadingMore ||
        (data && data?.totalPages > Number(data?.page) && (
          <button
            onClick={handleLoadMore}
            type="button"
            className={css.loadMoreBtn}
          >
            Load more
          </button>
        ))}

      {isLoadingMore && (
        <div className={css.loaderContainer}>
          <Loader />
        </div>
      )}

      {isFetching && (
        <>
          <BackgroundOverlay isActive={true} isOverAll={true} />
          <div className="loaderContainer">
            <Loader />
          </div>
        </>
      )}

      {error && (
        <p style={{ fontSize: '36px', paddingTop: '250px' }}>
          The error occurred
        </p>
      )}
    </div>
  );
}
