import Container from "@/components/common/Container";
import Image from "next/image";

const WhySpredAi = () => {
  return (
    <Container>
      <div id="why-spredai">
        <h1 className="uppercase xl:text-[45px] lg:text-[35px] text-[25px] ">WHY $PREDAI</h1>
      </div>
      <div className="flex lg:flex-row flex-col  lg:gap-16 md:gap-10">
        <div className="flex justify-center lg:w-1/2 w-full">
          <Image src="/img/whySpredai.png" alt="our-vision" width={593} height={575} />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center">
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
