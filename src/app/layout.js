import "./globals.css";
import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@Components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden antialiased">
        {/* @ts-expect-error Async Server Component */}
        <HeaderLayout />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <FooterLayout />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://thaipfa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.png",
  },
};

async function HeaderLayout() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const menu = await client.getSingle("menu");

  return <Header menu={menu} settings={settings} />;
}

async function FooterLayout() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const data = footer.data;

  return <Footer data={data} />;
}
