import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const record = await xata.db.Posts.update(req.body.id, {
    views: Number(req.body.views) + 1,
  });
  res.status(200).json(record);
}

export default handler;
