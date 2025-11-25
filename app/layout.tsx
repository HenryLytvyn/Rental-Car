// import type { Metadata } from 'next';
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
  modal: React.ReactNode;
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
