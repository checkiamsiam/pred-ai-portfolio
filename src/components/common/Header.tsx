import Image from "next/image";
import { MdMenu } from "react-icons/md";
import Button from "../ui/Button";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <div>
        <nav className="flex justify-between items-center py-5">
          <img src="/img/logo.png" alt="logo" />
          <div className="xl:flex gap-3 hidden ">
            <Button>Our Vision</Button>
            <Button>Our Product</Button>
            <Button>WHY $PREDAI</Button>
            <Button>ROADMAP</Button>
            <Button transparent>INVESTOR INQUIERIES</Button>
            <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Image src="/svg/telegram.svg" alt="send" width={24} height={24} />
            </button>
            <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <Image src="/svg/twitter.svg" alt="send" width={24} height={24} />
            </button>
          </div>
          <div className="xl:hidden flex">
            <button className="p-2">
              <MdMenu className="text-2xl" />
            </button>
          </div>
        </nav>
        <div className="h-[1px] bg-foreground" />
      </div>
    </Container>
  );
};

export default Header;
