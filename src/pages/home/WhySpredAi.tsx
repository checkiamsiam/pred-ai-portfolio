import Container from "@/components/common/Container";
import Image from "next/image";

const WhySpredAi = () => {
  return (
    <Container>
      <div id="why-spredai">
        <h1
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          className="uppercase xl:text-[45px] lg:text-[35px] text-[25px] "
        >
          WHY $PREDAI
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col  lg:gap-16 md:gap-10">
        <div data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000" className="flex justify-center lg:w-1/2 w-full">
          <Image src="/img/whySpredai.png" alt="our-vision" width={593} height={575} />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          className="lg:w-1/2 w-full flex justify-center items-center"
        >
          <p className="xl:text-xl mt-5">
            The PREDAI token fuels our AI marketplace by facilitating secure, blockchain-based transactions, encouraging innovation through rewards,
            and ensuring a decentralized, accessible platform for AI model exchange globally, aligning with the vision of democratizing AI technology.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default WhySpredAi;
