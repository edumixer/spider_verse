import Image, { StaticImageData } from "next/image";

import { heroesImage, defaultImage } from "./heroesImage";

import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  hero: IHeroData;
}

export default function HeroPicture({ hero }: IProps) {
  const image: StaticImageData | undefined = heroesImage[hero.id];

  return (
    <Image
      src={image || defaultImage}
      alt={`${hero.name} (Universo-${hero.universe})` || ""}
      priority
    />
  );
}