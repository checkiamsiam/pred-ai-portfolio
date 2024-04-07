const RoadmapCard = ({ date, text }: { date: string; text: string }) => {
  return (
    <div className="flex xl:flex-col sm:flex-row flex-col justify-center items-center ">
      <div className="xl:hidden sm:flex hidden justify-center sm:-mt-56 sm:mb-0 mb-5">
        <div className="flex flex-col justify-center items-center -mt-8 -mr-8">
          <div className="h-16 w-16 bg-background border-[15px] border-foreground rounded-full z-20" />
          <h1 className="uppercase xl:text-[35px] lg:text-[25px] text-[20px] sm:mt-5 mt-2">{date}</h1>
        </div>
        <div className="sm:flex hidden">
          <div className="h-14  border-t-2 border-r-2 border-foreground w-20 z-10 " />
          <div className="h-14 border-b-2 border-foreground w-20 z-10" />
        </div>
      </div>
      <div className="curved-container sm:w-[380px] sm:h-[250px]  border-2 border-foreground">
        <div className="curved-body sm:w-[380px] sm:h-[246px] bg-background p-5  pb-10 ">
          <p className="">{text}</p>
        </div>
      </div>
      <div className="sm:hidden justify-center xl:flex flex">
        <div className="sm:h-56 h-12 w-[1px] bg-foreground" />
      </div>
      <div className="sm:hidden justify-center flex ">
        <div className="flex flex-col justify-center items-center">
          <div className="h-16 w-16 bg-background border-[15px] border-foreground rounded-full z-20" />
          <h1 className="uppercase xl:text-[35px] lg:text-[25px] text-[20px] sm:mt-5 mt-2">{date}</h1>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
