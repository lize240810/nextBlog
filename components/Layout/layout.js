import { Inter } from 'next/font/google';
import Header from '../Header/header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-[#e7eef4] min-h-[100vh]'>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}