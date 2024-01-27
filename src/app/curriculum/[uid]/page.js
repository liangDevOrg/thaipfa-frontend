import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import TitleAndSubTitle from "@/components/TitleAndSubTitle";
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
  const curriculum = await client
    .getByUID("curriculum", params.uid)
    .catch(() => notFound());
  const settings = await client.getSingle("settings");

  return {
    title: `${curriculum.data.meta_title} | ${curriculum.data.siteTitle}`,
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

async function getData(params) {
  const client = createClient();
  const page = await client
    .getByUID("curriculum", params.uid)
    .catch(() => notFound());
  return page;
}

/**
 * @param {{ params: Params }}
 */
export default async function Curriculum({ params }) {
  try {
    const curriculum = await getData(params);

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
  } catch (err) {
    const errorMessage = err.response?.data?.message || "Could not fetch item.";
    console.error("Error fetching item:", errorMessage);
    throw new Error(errorMessage);
  }
}

export async function generateStaticParams() {
  const client = createClient();

  const allCurriculum = await client.getAllByType("curriculum");

  return allCurriculum.map((page) => {
    return { uid: page.uid };
  });
}
