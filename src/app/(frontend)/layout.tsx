import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getSiteSettings } from "@/lib/siteSettings";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const generateMetadata = async (): Promise<Metadata> => {
  const settings = await getSiteSettings();
  const image = settings.defaultSeo.image
    ? [settings.defaultSeo.image]
    : undefined;

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SERVER_URL || "https://zenticsys.com",
    ),
    title: {
      default: settings.defaultSeo.title,
      template: `%s | ${settings.siteName}`,
    },
    description: settings.defaultSeo.description,
    openGraph: {
      title: settings.defaultSeo.title,
      description: settings.defaultSeo.description,
      siteName: settings.siteName,
      images: image,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: settings.defaultSeo.title,
      description: settings.defaultSeo.description,
      images: image,
    },
  };
};

type PropsType = {
  children: React.ReactNode;
};

const RootLayout = async ({ children }: PropsType) => {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-white`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-white">{children}</main>
          <Footer settings={settings} />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
