import Container from "@/components/common/Container";
import Image from "next/image";

const OurVision = () => {
  return (
    <Container>
      <div className="flex lg:flex-row flex-col-reverse  lg:gap-16 md:gap-10">
        <div className="mt-5  lg:w-1/2 w-full">
          <div className="xl:mb-10 mb-5">
            <h1 className="uppercase xl:text-[45px] lg:text-[35px] text-[25px] ">Our vision</h1>
          </div>
          <p className="text-justify xl:text-xl xl:mb-16  mb-5">
            Artificial intelligence represents a transformative force for humanity, empowering individuals and enterprises by unlocking new levels of
            efficiency, innovation, and insight, already transforming the way we live and work. This milestone in human achievement propels our
            society into a new era of innovation and reshaping our world in ways we are only beginning to understand. At PredictAI, we aim to unlock
            the full potential of artificial intelligence for everyone by creating a decentralized ecosystem that dismantles the barriers to its mass
            adoption, envisioning a future where AI&apos;s transformative power is universally accessible.
          </p>
          <div>
            <button className="bg-foreground rounded-2xl  flex  justify-center items-center md:h-16 md:w-56 px-5 py-3">
              <span className="text-background">OPEN DAPP</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2 w-full">
          <Image src="/img/vision-image.png" alt="our-vision" width={593} height={576} />
        </div>
      </div>
    </Container>
  );
};

export default OurVision;
