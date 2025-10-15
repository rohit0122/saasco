export { getPageMetaBySlug } from "./pageMeta";
// src/lib/pageData.ts
import axios from "axios";

export async function getPageData(slug: string) {
  const query = `
    query MeetOutTeamQuery {
      meetOutTeam {
        documentId
        Name
        Roles
        Picture {
          url
          alternativeText
        }
        Socials
      }
    }
  `;

  try {
    console.log("Fetching data from Strapi...", `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`);

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

    return  { pageData: resp.data.data }; // return only the data object
  } catch (err) {
    console.error(`Error fetching pageData: ${slug}`, err);
    return { pageData: [] }; // return fallback data
  }
}
