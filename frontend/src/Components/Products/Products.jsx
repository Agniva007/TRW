import React from "react";
import products from "../../../products.json";
import Carousel from "../Carousel/Carousel";

export default function Products() {
  return (
    <section className="w-full py-12 md:py-18 lg:py-30 bg-muted" id="products">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-muted px-3 py-1 text-4xl">Our Products</div> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Products
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our wide range of high-quality rubber and plastic
              products, suitable for a variety of applications.
            </p>
          </div>
        </div>
        <Carousel AllProductData={products} />
      </div>
    </section>
  );
}
