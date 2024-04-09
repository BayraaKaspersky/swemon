import MainContent from "@/components/MainContent/MainContent";
import { getPosts } from "./lib/api";
import Head from "next/head";

export const getData = async () => {
  const posts = await getPosts();
  return posts.posts;
};

export default async function Home() {
  const posts = await getData();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui"
        />
      </Head>
      <MainContent posts={posts} />
    </>
  );
}
