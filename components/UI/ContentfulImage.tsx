import Image from "next/image";

interface LoaderProps {
  src: string;
  width?: number;
  quality?: number;
}

interface ContentfulImageProps extends LoaderProps {
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

function contentfulLoader({ src, width, quality }: LoaderProps) {
  return `htpps:${src}?w=${width}&q=${quality || 75}`;
}

const ContentfulImage = (props: ContentfulImageProps) => {
  return <Image loader={contentfulLoader} {...props} alt={props.alt} />;
};

export default ContentfulImage;
