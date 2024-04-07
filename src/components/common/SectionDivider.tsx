import Image from "next/image";
import Container from "./Container";

const SectionDivider = () => {
  return (
    <Container>
      <div className="md:py-10 py-5">
        <div className="flex items-center justify-between">
          <div data-aos="flip-right" className="md:w-[4%] md:mb-5 mb-[10px] mr-1">
            <Image src="/img/thin-star.png" alt="divider-star" width={25} height={25} />
          </div>
          <div className="md:h-5 h-3 border-t-[1px] border-r-[1px] border-foreground w-[40%] " />
          <div className="md:h-5 h-3 border-b-[1px] border-foreground w-[52%]" />
          <div data-aos="flip-right" className="md:w-[4%] flex justify-end md:mt-5 mt-[10px] ml-1">
            <Image src="/img/thin-star.png" alt="divider-star" width={25} height={25} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionDivider;
