import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Book Room App",
  description: "Register and book a meeting room for your team ",
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <main className="mx-auto max-w-7xl min-h-screen px-4 py-6 bg-indigo-500 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
