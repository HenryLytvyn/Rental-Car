// import { Metadata } from 'next';
// import { CarType } from '@/types/apiResponse/apiResponse';
// import { getCarByIdCached } from '@/lib/api/carCache';
// import CarInfo from './CarInfo';

// interface Props {
//   params: Promise<{ id: string }>;
// }

// export default async function CarInfoPage({ params }: Props) {
//   const { id } = await params;
//   const car: CarType = await getCarByIdCached(id);

//   return <CarInfo car={car} />;
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const { id } = await params;
//   const car: CarType = await getCarByIdCached(id);
//   const carFullName = `${car.brand} ${car.model} (${car.year})`;

//   return {
//     title: `Rent ${carFullName} – ${car.type}, ${car.engineSize} Engine`,
//     description: `Rent the ${carFullName} for $${car.rentalPrice}/hour. Mileage: ${car.mileage} km, Fuel consumption: ${car.fuelConsumption}. Features: ${(
//       car.accessories || []
//     ).join(
//       ', '
//     )}, ${(car.functionalities || []).join(', ')}. Book your car now!`,
//     keywords: `car rental, rent a car, ${car.brand}, ${car.model}, ${car.type}, vehicle rental, ${car.engineSize}, ${car.fuelConsumption}, ${car.rentalPrice}`,
//     authors: [
//       {
//         name: 'Henry Lytvyn',
//         url: 'https://www.linkedin.com/in/henry-lytvyn/',
//       },
//     ],
//     robots: 'index, follow',
//     openGraph: {
//       title: `Rent ${carFullName} – Detailed Info & Booking`,
//       description: `Explore the ${carFullName} with full specifications, rental conditions, mileage ${car.mileage} km, and fuel consumption ${car.fuelConsumption}. Book now for $${car.rentalPrice}/hour.`,
//       url: `https://go-it-car-rental.vercel.app/catalog/${car.id}`,
//       siteName: 'RentalCar',
//       type: 'website',
//       images: [
//         {
//           url: car.img,
//           width: 1200,
//           height: 630,
//           alt: `${carFullName} preview`,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `Rent ${carFullName} – Book Now`,
//       description: `Rent the ${carFullName} for $${car.rentalPrice}/hour. Mileage: ${car.mileage} km, Fuel consumption: ${car.fuelConsumption}. Book online today!`,
//       images: [car.img],
//     },
//   };
// }

export default async function CarInfoPage() {
  return null;
}
