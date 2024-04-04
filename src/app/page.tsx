import Header from "@/components/common/Header";
import SectionDivider from "@/components/common/SectionDivider";
import Banner from "@/pages/home/Banner";
import OurVision from "@/pages/home/OurVision";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <SectionDivider />
      <OurVision />
      <SectionDivider />
    </>
  );
}
