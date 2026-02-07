import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "We Are Dreamers",
  description:
    "A community for young innovators, enthusiasts, entrepreneurs who think mediocre is not enough.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
