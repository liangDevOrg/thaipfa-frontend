import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import TitleAndSubTitle from "@Components/TitleAndSubTitle";
/**
 * @typedef {{ uid: string }} Params
 */

/**
 * @param {{ params: Params }}
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
  const client = createClient();
  const curriculum = await client
    .getByUID("curriculum", params.uid)
    .catch(() => notFound());
  const settings = await client.getSingle("settings");

  return {
    title: `${curriculum.data.title} | ${settings.data.siteTitle}`,
    description: curriculum.data.meta_description,
    openGraph: {
      title: curriculum.data.meta_title,
      images: [
        {
          url: curriculum.data.meta_image.url,
        },
      ],
    },
  };
}

/**
 * @param {{ params: Params }}
 */
export default async function Curriculum({ params }) {
  const client = createClient();
  const curriculum = await client
    .getByUID("curriculum", params.uid)
    .catch(() => notFound());

  return (
    <>
      <TitleAndSubTitle
        title={curriculum.data.title}
        subtitle={curriculum.data.subtitle}
        themePage={curriculum.data.theme_page}
      />
      <SliceZone slices={curriculum.data.slices} components={components} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const curriculums = await client.getAllByType("curriculum");

  return curriculums.map((curriculum) => {
    return { uid: curriculum.uid };
  });
}
