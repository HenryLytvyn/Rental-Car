import { getCars } from '@/lib/api/api';
import CatalogClient from './Catalog.client';
import CarCard from '@/components/CarCard/CarCard';
import CarsList from '@/components/CarsList/CarsList';

interface Query {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export default async function Catalog() {
  const response = await getCars({ limit: '12', page: '1' });

  console.log('response: ', response);

  return (
    <div className="container">
      <CatalogClient />
      <CarsList items={response.cars} />
    </div>
  );
}
