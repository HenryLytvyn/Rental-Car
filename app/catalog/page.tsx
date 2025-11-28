import { getCarBrends } from '@/lib/api/api';
import CatalogClient from './Catalog.client';

interface Query {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export default async function Catalog() {
  const brands = await getCarBrends();
  return (
    <div className="container">
      <CatalogClient brands={brands} />
    </div>
  );
}
