import Container from "@/components/common/Container";
import ProductCard from "./ProductCard";

const TheProduct = () => {
  return (
    <Container>
      <div>
        <div className="xl:mb-10 mb-5">
          <h1 className="uppercase xl:text-[45px] lg:text-[35px] text-[25px] ">The Product</h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-20 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Container>
  );
};

export default TheProduct;
