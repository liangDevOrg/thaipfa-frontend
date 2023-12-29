import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { createClient, repositoryName } from "@/prismicio";
import { Bounded } from "@/components/Bounded";

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
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
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

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation.data?.links.map((item) => (
              <li
                key={prismic.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}

async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const data = footer.data;

  const contactTitle = data.contact_title;
  const companyNameEng = data.company_name_eng;
  const companyNameThai = data.company_name_thai;
  const companyAddress = data.company_address;
  const email = data.email;
  const telephone = data.telephone;
  const fax = data.fax;
  const subscribeName = data.subscribe_name;
  const subscribePlaceholder = data.subscribe_placeholder;
  const subscribeButtonName = data.subscribe_button_name;
  const our_services = data.our_services;
  

  return (
    <>
      <div className="container">{contactTitle}</div>
      <div className="container">{companyNameEng}</div>
      <div className="container">{companyNameThai}</div>
      <div className="container">{companyAddress}</div>
      <div className="container">{email}</div>
      <div className="container">{telephone}</div>
      <div className="container">{email}</div>
      <div className="container">{fax}</div>
      <div className="container">{subscribeName}</div>
      <div className="container">{subscribePlaceholder}</div>
      <div className="container">{subscribeButtonName}</div>
      <nav>
        <ul className="flex flex-wrap gap-6 md:gap-10">
          {our_services.map((item) => (
            <li
              key={prismic.asText(item.label)}
              className="font-semibold tracking-tight text-slate-800"
            >
              <PrismicNextLink
                key={item}
                href={item.service_link.url}
                target={item.service_link.target}
              >
                {item.service_name}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
