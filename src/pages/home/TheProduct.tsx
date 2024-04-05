import Container from "@/components/common/Container";
import ProductCard from "./ProductCard";

const TheProduct = () => {
  return (
    <Container>
      <div id="the-product">
        <div className="xl:mb-10 mb-5">
          <h1 className="uppercase xl:text-[45px] lg:text-[35px] text-[25px] ">The Product</h1>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-20 gap-5">
          <div data-aos="zoom-in" data-aos-duration="500">
            <ProductCard />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1400">
            <ProductCard />
          </div>
          <div data-aos="zoom-in" data-aos-duration="500">
            <ProductCard />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1400">
            <ProductCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TheProduct;
