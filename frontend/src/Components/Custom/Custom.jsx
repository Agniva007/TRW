import React from 'react'

export default function Custom() {
  return (
    <section className="w-full py-12 md:py-18 lg:py-30 bg-gray-100" id="custom">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored to Your Needs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experts can create custom rubber and plastic products to meet your specific requirements.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1724762756/pexels-fauxels-3184306_jlnfkz.jpg"
                width="550"
                height="310"
                alt="Custom Solutions"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Precision Manufacturing</h3>
                      <p className="text-muted-foreground">Our state-of-the-art facilities allow us to produce custom rubber and plastic parts with unparalleled precision.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Rapid Prototyping</h3>
                      <p className="text-muted-foreground">Quickly develop and test prototypes to ensure your product meets all your specifications.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Expert Consultation</h3>
                      <p className="text-muted-foreground">Work with our experienced engineers to design the perfect solution for your needs.</p>
                    </div>
                  </li>
                </ul>
                <a
                  href="mailto:technorubberworks1@gmail.com"
                  className="inline-flex bg-gray-300 h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Get a Quote
                </a>
              </div>
            </div>
        </div>
    </section>
  )
}
