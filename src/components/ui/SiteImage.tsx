import Image, { type ImageProps } from "next/image";
import type { SiteImage as SiteImageType } from "@/data/site-data";

type SiteImageProps = Omit<ImageProps, "src" | "alt"> & {
  image: SiteImageType;
  alt: string;
};

export function SiteImage({ image, alt, className, style, ...props }: SiteImageProps) {
  return (
    <Image
      src={image.src}
      alt={alt}
      className={className}
      style={{
        objectPosition: image.objectPosition ?? "center center",
        ...style,
      }}
      {...props}
    />
  );
}
