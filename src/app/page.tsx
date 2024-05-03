import Link from "next/link";
import Image from "next/image";
import pokedex from "../../public/pokedex.svg";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className={styles.pokedex}>
        <Image src={pokedex} alt="pokedex" width={700} height={700} />
        <span className={styles.alert}></span>
        <div className={styles.pokedexScreen}>
          <Link className={styles.linkText} href={"/pokemon-list"}>
            Go to Pokedex
          </Link>
        </div>
      </div>
    </div>
  );
}
