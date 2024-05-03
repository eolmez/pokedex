import Image from "next/image";
import Link from "next/link";
import pokedex from "../../public/pokedex.svg";

export default async function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Link href={"/pokemon-list"}>
        <Image src={pokedex} alt="pokedex" width={700} height={700} />
      </Link>
    </div>
  );
}
