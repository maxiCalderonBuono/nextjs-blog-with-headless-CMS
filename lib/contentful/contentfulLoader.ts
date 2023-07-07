import { ImageLoader } from "next/image"


export const contentfulLoader:ImageLoader = ({src,width,quality}) => {

  const url= new URL(`http:${src}`)

  const params = url.searchParams;

  params.set("fm", "avif")
  params.set("fit", params.get("fit") || "fill")
  params.set("w", params.get("w") || width.toString())

  if (quality){
    params.set("q",quality.toString());
  }

return url.href

}