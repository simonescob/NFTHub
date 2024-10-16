import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from '@next/font/google';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const inter = localFont({
//   src: "./fonts/Inter-Regular.woff2",
//   variable: "--font-inter",
//   weight: "500",
// });

export const metadata: Metadata = {
  title: "NFTHub",
  description: "High Quality NFT Collection",
};

export const inter = Inter({
  subsets: ['latin'], // Adjust subsets as needed
  variable: '--font-inter', // Customize variable name
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
