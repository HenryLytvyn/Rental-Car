import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import 'modern-normalize';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';

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
  title: 'Find Your Perfect Rental Car – Reliable & Affordable Rentals',
  description:
    'Discover reliable and budget-friendly rental cars for any journey. Browse our catalog and book your ideal car quickly and easily.',
  icons: '/favicon.ico',
  keywords:
    'car rental, rent a car, affordable cars, reliable car rental, vehicle hire, car catalog',
  authors: [
    {
      name: 'Henry Lytvyn',
      url: 'https://www.linkedin.com/in/henry-lytvyn/',
    },
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Find Your Perfect Rental Car – Reliable & Affordable Rentals',
    description:
      'Explore our wide range of rental cars. Filter by brand, price, and mileage, and book your ideal vehicle today.',
    url: 'https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app',
    siteName: 'RentalCar',
    type: 'website',
    images: [
      {
        url: 'https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app/openGraph.webp',
        width: 1200,
        height: 630,
        alt: 'Find your perfect rental car',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Your Perfect Rental Car – Reliable & Affordable Rentals',
    description:
      'Reliable and budget-friendly rental cars for any journey. Browse our catalog and book your ideal car today.',
    images: [
      'https://go-it-car-rental-5ia63ez2b-henrys-projects-5eef7959.vercel.app/openGraph.webp',
    ],
  },
};
