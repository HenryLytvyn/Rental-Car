// catalog/page.tsx

import { getCarBrends } from '@/lib/api/api';
import CatalogClient from './Catalog.client';
import { Metadata } from 'next';

export default async function Catalog() {
  const brands = await getCarBrends();

  return (
    <div className="container">
      <CatalogClient brands={brands} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Car Rental Catalog – Find Your Perfect Ride',
  description:
    'Explore a wide range of cars for rent. Filter by brand, price, and mileage, view available vehicles, and load more options with ease.',
  keywords:
    'car rental, rent a car, car hire, affordable cars, vehicle rental, car catalog',
  authors: [
    {
      name: 'Henry Lytvyn',
      url: 'https://www.linkedin.com/in/henry-lytvyn/',
    },
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Car Rental Catalog – Find Your Perfect Ride',
    description:
      'Browse and filter cars for rent by brand, price, and mileage. Discover your ideal vehicle today.',
    url: 'https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app/catalog',
    siteName: 'RentalCar',
    type: 'website',
    images: [
      {
        url: 'https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app/openGraph.webp',
        width: 1200,
        height: 630,
        alt: 'Car rental catalog preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Rental Catalog – Find Your Perfect Ride',
    description:
      'Explore a wide range of cars for rent. Filter by brand, price, and mileage, and load more options easily.',
    images: [
      'https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app/openGraph.webp',
    ],
  },
};
