import { getCarById as getCarByIdAPI } from './api';
import { CarType } from '@/types/apiResponse/apiResponse';

const carCache = new Map<string, CarType>();

export async function getCarByIdCached(id: string): Promise<CarType> {
  if (carCache.has(id)) {
    return carCache.get(id)!;
  }

  const car = await getCarByIdAPI(id);
  carCache.set(id, car);
  return car;
}
