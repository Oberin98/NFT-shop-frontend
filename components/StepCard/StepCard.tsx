import { FC, HTMLAttributes } from "react";
import Image, { ImageProps } from "next/image";

interface StepCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  imageSrc: ImageProps["src"];
  imageAlt: ImageProps["alt"];
}

export const StepCard: FC<StepCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  children,
  ...props
}) => {
  return (
    <div className="item" {...props}>
      <div className="icon">
        <Image src={imageSrc} alt={imageAlt} width={31} height={31} />
      </div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
};
