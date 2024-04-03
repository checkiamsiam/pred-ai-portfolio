import Image from "next/image";
import Button from "../ui/Button";
import Container from "./Container";
// clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0% 80%);

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
            <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center">
              <Image src="/svg/telegram.svg" alt="send" width={24} height={24} />
            </button>
            <button className="h-11 w-11 bg-foreground rounded-full flex justify-center items-center">
              <Image src="/svg/twitter.svg" alt="send" width={24} height={24} />
            </button>
          </div>
        </nav>
        <div className="h-[1px] bg-foreground" />
      </div>
    </Container>
  );
};

export default Header;
