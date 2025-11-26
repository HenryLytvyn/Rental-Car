import axios from 'axios';

interface CarsQuery {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
  limit?: string;
  page?: string;
}

export async function getCars({
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  limit,
  page,
}: CarsQuery) {
  const { data } = await axios.get('https://car-rental-api.goit.global/cars', {
    params: { brand, rentalPrice, minMileage, maxMileage, limit, page },
  });
  // console.log(data);
  return data;
}
