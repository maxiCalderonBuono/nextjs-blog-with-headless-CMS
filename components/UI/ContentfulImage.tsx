import Image from "next/image";

interface LoaderProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
}

interface ContentfulImageProps extends LoaderProps {
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export default function contentfulLoader({ src, width, quality }: LoaderProps) {
  return `${src}?w=${width}&q=${quality || 75}`;
}

// const ContentfulImage = (props: ContentfulImageProps) => {
//   return <Image loader={contentfulLoader} {...props} />;
// };

// export default ContentfulImage;
