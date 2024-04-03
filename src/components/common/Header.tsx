import Image from "next/image";
import Button from "../ui/Button";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center py-5">
        <img src="/img/logo.png" alt="logo" />
        <div className="flex gap-3">
          <Button>Our Vision</Button>
          <Button>Our Product</Button>
          <Button>WHY $PREDAI</Button>
          <Button>ROADMAP</Button>
          <Button transparent>INVESTOR INQUIERIES</Button>
          <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center">
            <Image src="/svg/telegram.svg" alt="send" width={24} height={24} />
          </button>
          <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center">
            <Image src="/svg/twitter.svg" alt="send" width={24} height={24} />
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
