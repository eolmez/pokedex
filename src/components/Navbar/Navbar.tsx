import Image from "next/image";
import Link from "next/link";
import pokedex from "../../../public/pokeball.svg";

interface NavbarProps {
  href: string;
  label: string;
}

const Navbar = ({ href, label }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" href={href}>
          <Image
            src={pokedex}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          {label}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
