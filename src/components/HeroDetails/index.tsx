import { Quicksand } from "next/font/google";
import Image from "next/image";

import styles from "./heroDetails.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface IProps {
  data: IHeroData;
};

export default function HeroDetails({ data }: IProps) {
  const {id, name, universe, details } = data;

  const characterFolder = id.startsWith('deadpool') ? 'deadpools' : 'spiders';

  return (
    <div className={quicksand.className}>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        {name} (Universo-{universe})
      </h1>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Informações</h2>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Nome Completo:</td>
              <td>{details.fullName}</td>
            </tr>
            <tr>
              <td className={styles.label}>Data de Nascimento:</td>
              <td>{details.birthday ? new Date(details.birthday).toLocaleDateString("pt-BR") : "Não informado"}</td>
            </tr>
            <tr>
              <td className={styles.label}>Terra Natal:</td>
              <td>{details.homeland}</td>
            </tr>
            <tr>
              <td className={styles.label}>Altura:</td>
              <td>{details.height.toFixed(2)}m</td>
            </tr>
            <tr>
              <td className={styles.label}>Peso:</td>
              <td>{details.weight.toFixed(2)}kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Primeira Aparição:</h2>
        <Image
          src={`/${characterFolder}/${id}-comic-book.png`}
          alt={`Primeira aparição nos quadrinhos de ${name} no universo ${universe}`}
          width={200}
          height={305}
        />
      </div>
    </div>
  );
}