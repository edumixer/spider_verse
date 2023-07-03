import getData from "../api/heroService";

import Carousel from "@/components/Carousel";

interface IProps {
  params: {
    id: string;
  };
}

export default async function Deadpool({ params: { id } }: IProps) {
  const res = await getData();

  // Filtra apenas os heróis cujo ID começa com "deadpool"
  const deadpoolHeroes = res.data.filter(hero => hero.id.startsWith("deadpool"));

  return <Carousel heroes={deadpoolHeroes} activeId={id} />;
}

