import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link href={"/pokemon-list"}>Enter the Pokedex</Link>
    </>
  );
}
