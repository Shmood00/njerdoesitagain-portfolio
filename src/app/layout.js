
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import styles from '../app/page.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "njerdoesitagain - Portfolio",
  description: "Portfolio for njerdoesitagain business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
