import { getPosts } from "../lib/api";

export default async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  console.log("=======" + Math.random(), page, limit);
  const posts = await getPosts(page, limit);
  res.status(200).json(posts);
};
