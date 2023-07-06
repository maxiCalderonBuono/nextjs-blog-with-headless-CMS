

import { ImageLoaderProps } from "next/image"


export const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https:${src}?w=${width}&q=${quality || 75}`
}