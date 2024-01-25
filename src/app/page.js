import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
  const client = createClient();
  const page = await client.getByUID("home", "home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      images: [
        {
          url: page.data.meta_image.url,
        },
      ],
    },
  };
}

async function getData() {
  const client = createClient();
  const page = await client.getByUID("home", "home").catch(() => notFound());

  return page;
}

export default async function Homepage() {
  const homePage = await getData();

  return <SliceZone slices={homePage.data.slices} components={components} />;
}
