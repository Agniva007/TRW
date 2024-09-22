import React from "react";

export default function ContactUs() {
  return (
    <section className="bg-muted py-12 md:py-18 lg:py-30" id="contactus">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
            <p className="text-muted-foreground">
              Get in touch with us to discuss your rubber and plastic product
              needs.
            </p>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg p-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg p-2"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border rounded-lg p-2"
              />
              <button className="bg-primary text-white py-2 px-4 rounded-lg bg-gray-600">
                Send Message
              </button>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1724771462/PicsArt_08-27-08.38.18_zdrciy.jpg"
            width="600"
            height="400"
            alt="Contact Us"
            className="mx-auto rounded-lg object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
