import getData from "../api/heroService";

import CarouselDeadpool from "@/components/CarouselDeadpool";

interface IProps {
  params: {
    id: string;
  };
}

export default async function Deadpool({ params: { id } }: IProps) {
  const res = await getData();

  // Filtra apenas os heróis cujo ID começa com "deadpool"
  const deadpoolHeroes = res.data.filter(hero => hero.id.startsWith("deadpool"));

  return <CarouselDeadpool heroes={deadpoolHeroes} activeId={id} />;
}

