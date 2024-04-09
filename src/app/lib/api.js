import { client } from "../lib/sanity";
import { useSwrIninite } from "swr";
export async function getPosts(pageNumber = 1, pageSize = 3) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;

  const query = `*[_type=="post"]| order(_createdAt desc) {_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }} [${startIndex}..${endIndex}]`;

  const posts = await client.fetch(query);

  const totalCountQuery = `count(*[_type == "post"])`;
  const totalCount = await client.fetch(totalCountQuery);

  const totalPages = Math.ceil(totalCount / pageSize);

  return { posts, totalPages };
}

export const getPostBySlug = async (slug) => {
  const post = await client.fetch(
    `*[_type=="post" && slug.current==$slug]{_createdAt, title, subtitle, date, content[]{...,'asset': asset->} , 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url,  }}`,
    { slug }
  );
  return post;
};
