import React from "react";

export default function Services() {
  return (
    <section className="w-full py-12 md:py-18 lg:py-30">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Rubber Manufacturing Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our comprehensive range of rubber manufacturing solutions,
            tailored to meet your unique needs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm transition-colors hover:bg-muted">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-primary p-3 text-primary-foreground">
                <CogIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">
                High-Performance Rubber Parts
              </h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              We specialize in supplying a wide range of rubber products, from
              molded rubber parts and rubber extrusions to die-cut and lathe-cut
              solutions.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm transition-colors hover:bg-muted">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
                <PuzzleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Custom Rubber Products</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              We offer custom-made rubber components tailored to meet your
              specific requirements. Whether you need a unique shape, material,
              or size, we can create the perfect rubber part to suit your needs.
            </p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm transition-colors hover:bg-muted">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-accent p-3 text-accent-foreground">
                <BeakerIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">In-House Testing</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              We have the capabilities to thoroughly test our rubber products
              in-house to ensure they meet the highest quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}
