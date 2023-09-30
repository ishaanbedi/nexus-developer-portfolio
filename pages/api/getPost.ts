import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const post = await xata.db.Posts.filter({
    slug: req.query.id as string,
  }).getFirst();
  res.status(200).json(post);
}

export default handler;
