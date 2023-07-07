"use client"

import { ImageLoaderProps } from "next/image"


export default function contentfulLoader({ src, width, quality }: ImageLoaderProps) {
  return `https:${src}?w=${width}&q=${quality || 75}`
}