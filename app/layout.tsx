import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanjoy Droid",
  description: "Sanjoy Droid Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden antialiased">
        <Header />
        <main
          className="grow h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300
                        scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400
                        dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
