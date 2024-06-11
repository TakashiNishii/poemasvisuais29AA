import type { Metadata } from "next";
import { Inter, Raleway, DM_Serif_Text } from "next/font/google";
import "./globals.css";

const dm_serif_text = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "POEMAS VISUAIS - 29AA 2024",
  description: "Amostra virtual de poemas visuais da 29AA 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_serif_text.className}>{children}</body>
    </html>
  );
}
