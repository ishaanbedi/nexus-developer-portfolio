import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body.name || !req.body.email || !req.body.message) {
    res.status(400).json({ error: "Missing name, email, or message" });
    return;
  }
  const record = await xata.db.Contact.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  res.status(200).json(record);
}

export default handler;
