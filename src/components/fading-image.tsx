"use client";

import Image from "next/image";

export default function FadingImage(props: React.ComponentPropsWithoutRef<typeof Image>) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      className={`${props.className} transition-opacity duration-500 ease-in-out opacity-0`}
      onLoad={(e) => {
        const target = e.target as HTMLImageElement;

        // next/image use an 1x1 px git as placeholder. we only want the onLoad event on the actual image
        if (target.src.indexOf("data:image/gif;base64") < 0) {
          target.style.opacity = "1";
        }
      }}
    />
  );
}
