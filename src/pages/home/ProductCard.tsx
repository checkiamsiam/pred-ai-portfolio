const ProductCard = () => {
  return (
    <div>
      <div className="xl:w-[542px] xl:h-[325px] lg:w-[450px] lg:h-[300px] curved-container sm:w-full sm:h-[250]  border-2 border-foreground">
        <div className="curved-body xl:w-[538px] xl:h-[321px] lg:w-[446px] lg:h-[296px] sm:w-full sm:h-[246px]  bg-background p-5  pb-10 ">
          <h1 className="uppercase xl:text-[35px] lg:text-[25px] text-[20px] sm:mb-5 mb-2">The Product</h1>
          <p className="xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum pretium quam non scelerisque. Quisque aliquet diam a felis
            fringilla semper. Fusce vitae libero vel ligula fringilla pulvinar. Phasellus varius at arcu quis ultricies. Donec a placerat purus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
