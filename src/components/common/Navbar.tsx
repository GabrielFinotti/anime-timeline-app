import Image from "next/image";
import logoIcon from "../../../public/logo/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <Image src={logoIcon} alt="Anime Timeline Logo" loading="eager" />
    </nav>
  );
};

export default Navbar;
