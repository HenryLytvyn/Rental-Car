import { CarType } from '@/types/apiResponse/apiResponse';
import CarCard from '../CarCard/CarCard';
import css from './CarsList.module.css';

interface Props {
  cars: CarType[];
}

export default function CarsList({ cars }: Props) {
  return (
    <ul className={css.carsList}>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
}
