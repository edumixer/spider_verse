import getData from "@/app/api/heroService";
import Carousel from "@/components/Carousel";

interface IProps {
  params: {
    id: string;
  };
}

export default async function Hero({ params: { id } }: IProps) {
  const res = await getData();

  return <Carousel heroes={res.data} activeId={id} />;
}