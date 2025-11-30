import useCarsFilters from '@/lib/store/CarsFiltersStore';

export default async function mileAgeValidation() {
  const store = useCarsFilters.getState();
  const { queryStore } = store;

  if (queryStore.minMileage !== '' && queryStore.maxMileage !== '') {
    const minMileageNumber = Number(queryStore.minMileage);
    const maxMileageNumber = Number(queryStore.maxMileage);

    if (maxMileageNumber < minMileageNumber) {
      useCarsFilters.setState({
        queryStore: {
          ...queryStore,
          maxMileage: String(minMileageNumber + 500),
        },
      });
    }
  }
}
