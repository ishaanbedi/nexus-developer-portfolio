import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const password = process.env.ADMIN_PASSWORD;
  if (req.body.password === password) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
