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
  const mockExam = await client
    .getByUID("mock_exam", params.uid)
    .catch(() => notFound());
  const settings = await client.getSingle("settings");

  return {
    title: `${asText(mockExam.data.title)} | ${asText(settings.data.siteTitle)}`,
    description: mockExam.data.meta_description,
    openGraph: {
      title: mockExam.data.meta_title,
      images: [
        {
          url: mockExam.data.meta_image.url,
        },
      ],
    },
  };
}

/**
 * @param {{ params: Params }}
 */
export default async function mockExam({ params }) {
  const client = createClient();
  const mockExam = await client
    .getByUID("mock_exam", params.uid)
    .catch(() => notFound());

  return <SliceZone slices={mockExam.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient();

  const allMockExam = await client.getAllByType("mock_exam");

  return allMockExam.map((page) => {
    return { uid: page.uid };
  });
}
