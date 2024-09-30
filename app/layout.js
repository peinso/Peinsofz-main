import { AOSInit } from "./aos";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import FloatingActionButtons from "./components/FloatBTN";

import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'PEINSO',
  description: 'leading petrological integrated solutions company',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <header className="overflow-x-hidden">
          <Nav />
        </header>
        <main className="flex flex-col gap-24 overflow-x-hidden">
          <Toaster position="bottom-right" />
          {children}
          <FloatingActionButtons />

          <Footer />
        </main>
      </body>
    </html>
  )
}
