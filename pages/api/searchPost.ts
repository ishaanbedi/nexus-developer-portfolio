import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";
const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let posts = null;
  if (req.query.query === undefined || req.query.query === "") {
    posts = await xata.db.Posts.getAll();
    res.status(200).json(posts);
    return;
  }
  posts = await xata.db.Posts.search(req.query.query as string, {
    fuzziness: 2,
  });

  res.status(200).json(posts);
}
