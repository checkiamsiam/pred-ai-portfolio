import Image from "next/image";
import Container from "./Container";

const SectionDivider = () => {
  return (
    <Container>
      <div className="md:py-10 py-5">
        <div className="flex items-center justify-between">
          <div data-aos="flip-right" className="md:w-[4%] md:mb-10 mb-2">
            <Image src="/img/thin-star.png" alt="divider-star" width={35} height={35} />
          </div>
          <div className="md:h-11 h-3 border-t-2 border-r-2 border-foreground w-[40%] " />
          <div className="md:h-11 h-3 border-b-2 border-foreground w-[52%]" />
          <div data-aos="flip-right" className="md:w-[4%] flex justify-end md:mt-10 mt-2">
            <Image src="/img/thin-star.png" alt="divider-star" width={35} height={35} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionDivider;
