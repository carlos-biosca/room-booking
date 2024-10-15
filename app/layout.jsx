import { Inter } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Room App",
  description: "Register and book a meeting room for your team "
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8 min-h-[80vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}