import Header from "@/components/common/Header";
import SectionDivider from "@/components/common/SectionDivider";
import Banner from "@/pages/home/Banner";
import OurVision from "@/pages/home/OurVision";
import Roadmap from "@/pages/home/Roadmap";
import TheProduct from "@/pages/home/TheProduct";
import WhySpredAi from "@/pages/home/WhySpredAi";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <SectionDivider />
      <OurVision />
      <SectionDivider />
      <TheProduct />
      <SectionDivider />
      <WhySpredAi />
      <SectionDivider />
      <Roadmap />
    </>
  );
}
