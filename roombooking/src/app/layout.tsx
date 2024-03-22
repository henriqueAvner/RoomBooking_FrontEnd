import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainContainer from "./components/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Room Booking",
  description: "Find the best room for hotel reservations",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MainContainer>
      <body className={inter.className}>{children}</body>
      </MainContainer>
    </html>
  );
}
