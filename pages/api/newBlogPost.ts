import { getXataClient } from "@/lib/xata";
import type { NextApiRequest, NextApiResponse } from "next";

const xata = getXataClient();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const records = await xata.db.Posts.filter("slug", req.body.slug)
      .select(["slug"])
      .getFirst();

    if (records) {
      res.status(200).json({
        success: false,
        message: "Slug already exists",
      });
      return;
    }
    await xata.db.Posts.create({
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      published: new Date(),
      views: 0,
      body: req.body.body,
    });
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Something went wrong...",
    });
  }
}

export default handler;
