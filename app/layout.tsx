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
  description:
    "Un blog para invitar a debatir y repensar la politica, economía y sociedad.",
  keywords: [
    "Economía",
    "Mundo",
    "Política argentina",
    "Sociedad",
    "Educación",
    "Seguridad",
  ],
  authors: [
    {
      name: "maxiCalderónBuono",
      url: "https://www.maxicalderon.dev/",
    },
  ],
  creator: "maxiCalderónBuono",
  openGraph: {
    title: "Mindenkié",
    description:
      "Un blog para invitar a debatir y repensar la politica, economía y sociedad.",
    url: "https://mindenkietest.vercel.app/",
    siteName: "Mindenkié",
    images: [
      {
        url: "https://res.cloudinary.com/dvqlenul5/image/upload/v1683838762/mindekie_og_main_e56nem.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en-ES",
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
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
