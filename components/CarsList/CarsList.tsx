import CarCard from '../CarCard/CarCard';
import css from './CarsList.module.css';

interface CarCardProps {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  mileage: number;
}

interface Props {
  items: CarCardProps[];
}

export default function CarsList({ items }: Props) {
  return (
    <ul className={css.carsList}>
      {items.map(item => (
        <CarCard key={item.id} car={item} />
      ))}
    </ul>
  );
}
