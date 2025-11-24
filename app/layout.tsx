// import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import 'modern-normalize';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// export const metadata: Metadata = {
//   title: ,
//   description: ,
// };

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <div style={{ position: 'fixed', top: 0, left: 0 }}>{modal}</div>
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
