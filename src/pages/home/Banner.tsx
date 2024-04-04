import Container from "@/components/common/Container";
import Image from "next/image";

const Banner = () => {
  return (
    <Container>
      <div className="md:py-10 py-5">
        <div className="sm:-mb-8 md:-mb-12 mb-5">
          <div className="flex gap-3 mb-3 ">
            <h1 className="uppercase xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[20px]">democratize access to advanced</h1>
            <div className="flex justify-center items-center">
              <Image src="/img/star.png" alt="line" width={35} height={35} />
            </div>
          </div>
          <h1 className="uppercase xl:text-[45px] lg:text-[35px] md:text-[25px] sm:text-[20px]">deep learning models</h1>
        </div>
        <div className="bg-[url('/img/HeroBackground.png')] bg-cover  bg-no-repeat bg-center xl:min-h-[800px] min-h-[700px] flex justify-center items-center">
          <div>
            <Image src="/img/HeroImage.png" alt="banner" width={500} height={500} />
          </div>
        </div>
        <div className=" lg:-mt-12  md:flex justify-between items-center ">
          <div>
            <button className="px-5 rounded-full border-2 border-foreground  flex gap-5  justify-center items-center sm:h-11 py-3 sm:py-0 mt-12">
              <span>CA : 0x00000000000000000000</span>
              <Image src="/img/Copy.png" alt="copy" width={24} height={24} />
            </button>
          </div>
          <div className="sm:mt-0 mt-5">
            <h1 className="uppercase xl:text-[45px] lg:text-[30px] md:text-[25px] sm:text-[20px] sm:text-end sm:mt-0 mt-5">DECENTRALIZED</h1>
            <div className="flex gap-3 xl:mb-3 lg:mb-5 sm:mt-0 mt-5">
              <div className="flex justify-center items-center">
                <Image src="/img/star.png" alt="line" width={35} height={35} />
              </div>
              <h1 className="uppercase xl:text-[45px]  lg:text-[30px] md:text-[25px] sm:text-[20px]">models MARKETPLACE</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
