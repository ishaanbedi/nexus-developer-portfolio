import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const posts = await xata.db.Posts.getAll();

  res.status(200).json(posts);
}
