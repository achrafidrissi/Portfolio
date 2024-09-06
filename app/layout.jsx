import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ThemeProvider} from "next-themes";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Elaidi Idrissi Achraf Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light' >
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
