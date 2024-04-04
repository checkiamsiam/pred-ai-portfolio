import Container from "@/components/common/Container";
import RoadmapCard from "./RoadMapCard";

const Roadmap = () => {
  return (
    <Container>
      <div id="roadmap" className="xl:mb-40 mb-10">
        <div className="xl:mb-10 mb-5">
          <h1 className="uppercase xl:text-[45px] lg:text-[35px] text-[25px] ">The ROADMAP</h1>
        </div>
        <div className="xl:mt-0 mt-20">
          <div className="grid xl:grid-cols-3 grid-cols-1">
            <div className="sm:mb-0 mb-10">
              <RoadmapCard
                date="Q1 2024"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum pretium quam non scelerisque. Quisque aliquet diam a felis
            fringilla semper. Fusce vitae libero vel ligula fringilla pulvinar. Phasellus varius at arcu quis ultricies. Donec a placerat purus."
              />
            </div>
            <div className="xl:mt-14 mt-5 sm:mb-0 mb-5">
              <RoadmapCard
                date="Q2 2024"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum pretium quam non scelerisque. Quisque aliquet diam a felis
            fringilla semper. Fusce vitae libero vel ligula fringilla pulvinar. Phasellus varius at arcu quis ultricies. Donec a placerat purus."
              />
            </div>
            <div className="xl:mt-28 mt-5 sm:mb-0 mb-5">
              <RoadmapCard
                date="Q3 2024"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum pretium quam non scelerisque. Quisque aliquet diam a felis
            fringilla semper. Fusce vitae libero vel ligula fringilla pulvinar. Phasellus varius at arcu quis ultricies. Donec a placerat purus."
              />
            </div>
          </div>
          <div className="xl:grid xl:grid-cols-3 grid-cols-1 hidden">
            <div className="flex justify-center -mt-56">
              <div className="flex flex-col justify-center items-center">
                <div className="h-16 w-16 bg-background border-[15px] border-foreground rounded-full z-20" />
                <h1 className="uppercase xl:text-[35px] lg:text-[25px] text-[20px] sm:mt-5 mt-2">Q1 2024</h1>
              </div>
            </div>
            <div className="flex justify-center -mt-28">
              <div className="flex flex-col justify-center items-center">
                <div className="h-16 w-16 border-[15px] bg-background border-foreground rounded-full z-20" />
                <h1 className="uppercase xl:text-[35px] lg:text-[25px] text-[20px] sm:mt-5 mt-2">Q2 2024</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center">
                <div className="h-16 w-16 border-[15px] bg-background border-foreground rounded-full z-20" />
                <h1 className="uppercase xl:text-[35px] lg:text-[25px] text-[20px] sm:mt-5 mt-2">Q3 2024</h1>
              </div>
            </div>
          </div>
          <div className="xl:flex px-[235px] -mt-[210px] hidden">
            <div className="h-14  border-t-2 border-r-2 border-foreground w-[40%] z-10 " />
            <div className="h-14 border-b-2 border-foreground w-[52%] z-10" />
            <div className="h-14  border-t-2 border-r-2 border-foreground w-[40%] mt-14 z-10" />
            <div className="h-14 border-b-2 border-foreground w-[52%] mt-14 z-10" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Roadmap;
