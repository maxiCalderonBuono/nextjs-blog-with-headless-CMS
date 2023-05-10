export interface Items {
  metadata: Metadata;
  sys: ContentfulTypesSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  description: string;
  content: FieldsContent;
  image: Image;
  filter: string;
  slug: string;
  quote: string;
}

export interface FieldsContent {
  data: Data;
  content: PurpleContent[];
  nodeType: string;
}

export interface PurpleContent {
  data: Data;
  content: FluffyContent[];
  nodeType: FluffyNodeType;
}

export enum PurpleNodeType {
  Text = "text",
}

export enum FluffyNodeType {
  Paragraph = "paragraph",
}

export interface Image {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface ImageSys {
  type: string;
  linkType: string;
  id: string;
}

export interface ContentfulTypesSys {
  space: Image;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Image;
  revision: number;
  contentType: Image;
  locale: string;
}

export type Filter = null | ((post: Post) => boolean);
