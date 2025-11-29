import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import 'modern-normalize';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';

// export const metadata: Metadata = {
//   title: ,
//   description: ,
// };

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

interface Props {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          <div style={{ position: 'fixed', top: 0, left: 0 }}>{modal}</div>
        </TanStackProvider>
      </body>
    </html>
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
      name: 'Hennadii Lytvyn',
      url: 'https://www.linkedin.com/in/henry-lytvyn/',
    },
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Car Rental Catalog – Find Your Perfect Ride',
    description:
      'Browse and filter cars for rent by brand, price, and mileage. Discover your ideal vehicle today.',
    url: 'https://yourwebsite.com/catalog',
    siteName: 'YourCompanyName',
    type: 'website',
    images: [
      {
        url: 'https://yourwebsite.com/og-image-cars.jpg',
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
    images: ['https://yourwebsite.com/og-image-cars.jpg'],
  },
};
