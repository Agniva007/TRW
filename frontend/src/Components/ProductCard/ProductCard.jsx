import React from "react";
const ProductCard = ({ productName, imageSrc, description }) => {
  return (
    <>
      <div className="flex gap-4">
        <article className="mx-auto my-8 w-[300px] rounded-2xl bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer mx-4">
          <div className="relative h-[200px] overflow-hidden rounded-t-2xl">
            <img
              src={imageSrc}
              alt="Product Image"
              width={300}
              height={200}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
              {productName}
            </h4>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProductCard;
