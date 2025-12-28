import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenticsys | Modern Software Solutions",
  description:
    "Zenticsys builds innovative software, cloud, and data solutions to help businesses scale with confidence.",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} antialiased bg-white`}>
//         <ThemeProvider>
//           <Navbar />
//           <main className="min-h-screen bg-white">{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

type PropsType = {
  children: React.ReactNode;
};

const RootLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-white">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
