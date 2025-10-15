// src/lib/pageData.ts
import axios from "axios";

export async function getPageMetaBySlug(slug: string) {
  if (!slug) {
    throw new Error("Missing slug parameter");
  }

  const query = `
    query GetPageMetaBySlug {
      metadatas(filters: { slug: { eq: "${slug}" } }) {
        title
        description
        keywords
      }
    }
  `;

  try {
    console.log("Fetching page meta from Strapi...", `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`);

    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      }
    );
    return { pageMeta: resp.data.data.metadatas}; // only return data object
  } catch (err) {
    console.error(`Error fetching page meta for slug "${slug}":`, err);
    return { pageMeta: [] }; // fallback
  }
}
