import React, { useState } from "react";
import materials from "../../../materials"; // Adjust the path according to your project structure

export default function Materials() {
  const [showMore, setShowMore] = useState(false);

  const displayedMaterials = showMore ? materials : materials.slice(0, 3);

  return (
    <section className="w-full py-12 md:py-18 lg:py-30 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center gap-6 md:gap-8 px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Discover Our Rubber Range
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our diverse range of high-quality rubber materials, each
              designed to meet the unique needs of various industries.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedMaterials.map((material, index) => (
            <div key={index} className="grid gap-4 bg-card p-6 rounded-lg shadow-sm bg-gray-300">
              <div className="flex items-center gap-3">
                <div className={`${material.iconBg} rounded-full p-2`}>
                  <material.Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{material.name}</h3>
              </div>
              <p className="text-muted-foreground">
                {material.description}
              </p>
            </div>
          ))}
        </div>
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="mt-6 px-6 py-2 bg-primary text-white rounded-lg bg-gray-400"
          >
            Show More
          </button>
        ):(
          <button
            onClick={() => setShowMore(false)}
            className="mt-6 px-6 py-2 bg-primary text-white rounded-lg bg-gray-400"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
