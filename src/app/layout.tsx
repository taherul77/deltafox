import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Delta Fox - IT Solutions & Services",
  description: "Leading technology solutions providing company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
