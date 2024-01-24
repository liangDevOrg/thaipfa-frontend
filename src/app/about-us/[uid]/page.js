import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

/**
 * @typedef {{ uid: string }} Params
 */

/**
 * @param {{ params: Params }}
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const client = createClient();
  const aboutUs = await client
    .getByUID("about_us", params.uid)
    .catch(() => notFound());
  const settings = await client.getSingle("settings");

  return {
    title: `${aboutUs.data.meta_title} | ${aboutUs.data.siteTitle}`,
    description: aboutUs.data.meta_description,
    openGraph: {
      title: aboutUs.data.meta_title,
      images: [
        {
          url: aboutUs.data.meta_image.url,
        },
      ],
    },
  };
}

/**
 * @param {{ params: Params }}
 */
export default async function AboutUs({ params }) {
  const client = createClient();
  const aboutUs = await client
    .getByUID("about_us", params.uid)
    .catch(() => notFound());

  return <SliceZone slices={aboutUs.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient();

  const allAboutUs = await client.getAllByType("about_us");

  return allAboutUs.map((page) => {
    return { uid: page.uid };
  });
}
