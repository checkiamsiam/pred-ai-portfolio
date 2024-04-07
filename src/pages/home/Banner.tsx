import Container from "@/components/common/Container";
import Image from "next/image";
import CopyToClipButton from "./CopyToClipButton";

const Banner = () => {
  return (
    <Container>
      <div className="md:py-10 py-5">
        <div className="xs:-mb-8 -mb-12  md:-mb-12 xl:-mb-20 ">
          <div data-aos="fade-right" data-aos-duration="600" className="flex gap-3 mb-3 ">
            <h1 className="uppercase 2xl:text-[60px] xl:text-[45px]  lg:text-[35px] md:text-[25px] sm:text-[20px]">democratize access to advanced</h1>
            <div className="flex justify-center items-center">
              <Image src="/img/star.png" alt="line" width={35} height={35} />
            </div>
          </div>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="uppercase 2xl:text-[60px] xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[20px]"
          >
            deep learning <span className="xs:inline block">models</span>
          </h1>
        </div>
        <div className="bg-[url('/img/HeroBackground.png')] bg-cover  bg-no-repeat bg-center xl:min-h-[800px] min-h-[700px] flex justify-center items-center">
          <div data-aos="zoom-in" data-aos-duration="1400">
            <Image src="/img/HeroImage.png" alt="banner" width={500} height={500} />
          </div>
        </div>
        <div className=" lg:-mt-10 xl:-mt-12 2xl:-mt-20  flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center ">
          <div>
            <CopyToClipButton />
          </div>
          <div className="sm:mt-0 mt-5">
            <h1
              data-aos="fade-left"
              data-aos-duration="600"
              className="uppercase 2xl:text-[60px] xl:text-[45px] lg:text-[30px] md:text-[25px] sm:text-[20px] lg:text-end lg:mt-0 mt-5"
            >
              DECENTRALIZED
            </h1>
            <div data-aos="fade-left" data-aos-duration="1000" className="flex gap-3 xl:mb-3 lg:mb-5 sm:mt-0 mt-5  lg:mt-5 xl:mt-0">
              <div className="flex justify-center items-center">
                <Image src="/img/star.png" alt="line" width={35} height={35} />
              </div>
              <h1 className="uppercase 2xl:text-[60px] xl:text-[45px]  lg:text-[30px] md:text-[25px] sm:text-[20px]">models MARKETPLACE</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
