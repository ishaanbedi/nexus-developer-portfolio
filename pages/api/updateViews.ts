import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  const record = await xata.db.Posts.update(req.body.id, {
    views: Number(req.body.views) + 1,
  });
  console.log(record);
  res.status(200).json(record);
}

export default handler;
