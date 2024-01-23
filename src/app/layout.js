import "./globals.css";
import { Inter } from "next/font/google";
import {
  PrismicNextImage,
  PrismicNextLink,
  PrismicPreview,
} from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { createClient, repositoryName } from "@/prismicio";
import { Header } from "@/components/Header";

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

async function HeaderLayout() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const menu = await client.getSingle("menu");

  return <Header menu={menu} settings={settings} />;
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
  const socialMediaList = data.social_media_list;

  return (
    <div className="footer">
      <div className="background-darkgrey">
        <div className="container-content py-[35px]">
          <div className="content">
            <div className="content-left">
              <p>
                {contactTitle}
                <br />
                {companyNameEng}
                <br />
                {companyNameThai}
                <br />
                {companyAddress}
                <br />
                {email}
                <br />
                {telephone}
                <br />
                {email}
                <br />
                {fax}
              </p>
            </div>
            <div className="content-center">
              <h3>Our Services</h3>
              <ul className="link-service">
                {our_services.map((item) => (
                  <li key={prismic.asText(item.label)}>
                    <PrismicNextLink
                      key={item}
                      field={item.service_link}
                      target={item.service_link}
                    >
                      {item.service_name}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="content-right">
              <h3>{subscribeName}</h3>
              <input
                type="text"
                name=""
                placeholder={subscribePlaceholder}
                className="input-email"
              />
              <button className="block btn-primary mt-[15px]">
                {subscribeButtonName}
              </button>
            </div>
          </div>
        </div>

        {socialMediaList.map((item, index) => (
          <div className="faq-card" key={index}>
            <PrismicNextLink field={item.social_media_link}>
              <PrismicNextImage field={item.social_media_logo} width={25} alt="" />
            </PrismicNextLink>
          </div>
        ))}
      </div>
      <div className="copy">
        Copyright &copy; 2024 Thai Professional Finance Academy (ThaiPFA) All
        Rights Reserved
      </div>
    </div>
  );
}
