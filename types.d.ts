// Generated by https://quicktype.io

export interface Response {
  data: Post[];
  meta;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface PostAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  content: string;
  image: Image;
  filter: string;
  quote: string;
}

export interface Image {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Large;
  small: Large;
  large: Large;
  medium: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: string;
}

export type Filter = null | ((post: Post) => boolean);
