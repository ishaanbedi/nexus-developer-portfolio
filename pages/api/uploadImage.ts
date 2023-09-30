import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const base64Image = req.body.base64.split(";base64,").pop();
  const record = await xata.db.ImageUploadPlugin.create({
    name: req.body.name,
    image_file: {
      name: req.body.name,
      mediaType: "image/png",
      base64Content: base64Image,
    },
  });
  res.status(200).json(record);
}
