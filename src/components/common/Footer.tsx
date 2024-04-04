import Image from "next/image";
import Container from "./Container";

const Footer = () => {
  return (
    <Container>
      <div>
        <div className="h-[1px] bg-foreground" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:py-10 py-5">
          <div>
            <Image src="/img/placeholder.png" alt="placeholer" width={200} height={200} />
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              <li className="uppercase font-medium">
                <a href="#our-vision">OUR VISION</a>
              </li>
              <li className="uppercase font-medium">
                <a href="#the-product">THE PRODUCT</a>
              </li>
              <li className="uppercase font-medium">
                <a href="#why-spredai">WHY $PREDAI</a>
              </li>
              <li className="uppercase font-medium">
                <a href="#roadmap">ROADMAP</a>
              </li>
              <li className="uppercase font-medium">
                <a href="">INVESTOR INQUIERIES</a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-3">
              <li className="uppercase font-medium">
                <a href="">X / TWITTER</a>
              </li>
              <li className="uppercase font-medium">
                <a href="">TELEGRAM</a>
              </li>
              <li className="uppercase font-medium">
                <a href="">DEXSCREENER</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:pb-10 pb-5">
          <p className="text-center font-medium">© PREDICTAI 2024</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
