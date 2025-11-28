import { QueryCarsType } from '@/types/apiRequest/apiRequest';
import type {
  CarByIdResponse,
  CarsResponse,
} from '@/types/apiResponse/apiResponse';
import axios from 'axios';

const BaseURL = process.env.NEXT_PUBLIC_API_URL;

export async function getCars({
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  limit,
  page,
}: QueryCarsType): Promise<CarsResponse> {
  const { data } = await axios.get<CarsResponse>(`${BaseURL}/cars`, {
    params: { brand, rentalPrice, minMileage, maxMileage, limit, page },
  });

  return data;
}

export async function getCarBrends(): Promise<string[]> {
  const { data } = await axios.get<string[]>(`${BaseURL}/brands`);
  return data;
}

export async function getCarById(id: string): Promise<CarByIdResponse> {
  const { data } = await axios.get<CarByIdResponse>(`${BaseURL}/cars/${id}`);
  return data;
}
