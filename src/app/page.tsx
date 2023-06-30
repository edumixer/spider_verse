import getData from "./api/heroService";
import styles from "./page.module.scss";

import HeroesList from "@/components/HeroesList";

export default async function Home() {
  const res = await getData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={res.data}/>
    </main>
  )
}
