import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  if (!req.body.password) {
    res.status(400).json({ error: "Missing password" });
    return;
  }
  if (!process.env.ADMIN_PASSWORD) {
    res
      .status(500)
      .json({ error: "Missing ADMIN_PASSWORD environment variable" });
    return;
  }
  const password = process.env.ADMIN_PASSWORD;
  if (req.body.password === password) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
