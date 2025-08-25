import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar/navbar'
import { Providers } from '@/redux/providers'
import './layout.css';

// import styles from '@/app/page.module.scss'
// import { setupStore } from "@/redux/store";
// import { Provider } from "react-redux";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Properties Application',
  description: 'Manage properties',
}
// const store = setupStore();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bodyStyle = {
    margin: 0,
  };

  return (
    <html lang="en">
      <head>
        <meta name="author" content="Jonathan Stiven Soto Pantoja" />
      </head>
      <body >
        <Navbar />
        <div className='container'>
          <Providers>
          {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
