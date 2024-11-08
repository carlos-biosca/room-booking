import { Inter } from "next/font/google";
import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContextWrapper from "@/components/ContextWrapper";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Room App",
  description: "Register and book a meeting room for your team "
};

export default function RootLayout({ children }) {
  return (
    <ContextWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8 min-h-[calc(100vh-132px)]">
            {children}
          </main>
          <Footer />
          <ToastContainer position="top-center" hideProgressBar />
        </body>
      </html>
    </ContextWrapper>
  );
}
