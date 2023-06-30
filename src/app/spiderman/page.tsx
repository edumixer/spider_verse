import getData from "../api/heroService";

import CarouselSpider from "@/components/CarouselSpider";

interface IProps {
  params: {
    id: string;
  };
}

export default async function Spiderman({ params: { id } }: IProps) {
  const res = await getData();

  // Filtra apenas os heróis cujo ID começa com "spider"
  const spidermanHeroes = res.data.filter(hero => hero.id.startsWith("spider"));

  return <CarouselSpider heroes={spidermanHeroes} activeId={id} />;
}

