import type { Metadata } from "next";
import "./globals.css";
import MainNavBar from "~/components/MainNavBar";
import localFont from "next/font/local";
import ThemeProvider from "~/components/ThemeProvider";
import SiteFooter from "~/components/SiteFooter";
import { FiltersProvider } from "~/components/filter";

const inter = localFont({
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: "--font-inter",
  display: "swap",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Mindenkié - Bienvenidos a tod@s",
    template: "%s | Mindenkié",
  },
  description: "Politica, economía y sociedad.",
  openGraph: {
    title: "Mindenkié",
    description: "Politica, economía y sociedad.",
    // url: "https://leerob.io",
    siteName: "Mindenkié",
    images: [
      {
        url: "https://leerob.io/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Mindenkié",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${fontHeading.variable}`}>
      <body className="flex flex-col min-h-screen dark:bg-gray-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FiltersProvider>
            {/* @ts-expect-error Server Component */}
            <MainNavBar />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </FiltersProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
