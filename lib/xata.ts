// Generated by Xata Codegen 0.26.6. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "Posts",
    columns: [
      { name: "title", type: "string" },
      { name: "slug", type: "string" },
      { name: "description", type: "string" },
      { name: "published", type: "datetime" },
      { name: "views", type: "int" },
      { name: "body", type: "text" },
    ],
  },
  {
    name: "Contact",
    columns: [
      { name: "name", type: "string" },
      { name: "email", type: "email" },
      { name: "message", type: "text" },
    ],
  },
  {
    name: "ImageUploadPlugin",
    columns: [
      { name: "image_file", type: "file" },
      { name: "name", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Posts = InferredTypes["Posts"];
export type PostsRecord = Posts & XataRecord;

export type Contact = InferredTypes["Contact"];
export type ContactRecord = Contact & XataRecord;

export type ImageUploadPlugin = InferredTypes["ImageUploadPlugin"];
export type ImageUploadPluginRecord = ImageUploadPlugin & XataRecord;

export type DatabaseSchema = {
  Posts: PostsRecord;
  Contact: ContactRecord;
  ImageUploadPlugin: ImageUploadPluginRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Ishaan-Bedi-s-workspace-tbb9k6.eu-west-1.xata.sh/db/nexus-developer-portfolio",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
