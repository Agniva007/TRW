import React from "react";

export default function Banner() {
  return (
    <section className="w-full py-12 md:py-18 lg:py-30 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Reliable Rubber and Plastic Solutions
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Techno Rubber Works (TRW) is a leading supplier of high-quality rubber and
                plastic materials, offering a wide range of products and custom
                solutions to meet your needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-400 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-gray-300/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View Products
              </a>
              <a
                href="#custom"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-md transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Custom Solutions
              </a>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1724677525/pexels-yury-kim-181374-585418_kxwqgw.jpg"
            width="200"
            height="200"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
