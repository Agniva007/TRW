import React from "react";

export default function Solutions() {
  return (
    <section
      className="w-full py-12 md:py-18 lg:py-30 bg-cover bg-center" id="aboutus"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/djpbcmw8p/image/upload/v1724759711/pexels-chrisleboutillier-929385_jstmbo.jpg')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">
          Quality Solutions for every Industry
        </h1>
        <p className="mt-4 max-w-6xl">
          At<span className="text-xl"> Techno Rubber Works (TRW) </span>, we are
          dedicated to delivering excellence in the manufacturing of industrial
          rubber and plastic products. For over 20 years, we have been at the
          forefront of innovation, offering a diverse range of high-quality
          solutions tailored to meet the unique demands of various industries.
          Our expertise lies in the development of customized rubber products,
          designed to address the specific requirements of our clients'
          applications. Whether you need standard components or specialized
          solutions, TRW is your trusted partner for reliable and durable
          products that meet the highest industry standards.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col items-center">
            <FuelIcon className="w-12 h-12" />
            <p className="mt-2">OIL & GAS</p>
          </div>
          <div className="flex flex-col items-center">
            <ConstructionIcon className="w-12 h-12" />
            <p className="mt-2">ENGINEERING</p>
          </div>
          <div className="flex flex-col items-center">
            <CoinsIcon className="w-12 h-12" />
            <p className="mt-2">MINING</p>
          </div>
          <div className="flex flex-col items-center">
            <FactoryIcon className="w-12 h-12" />
            <p className="mt-2">MANUFACTURING</p>
          </div>
          <div className="flex flex-col items-center">
            <ConstructionIcon className="w-12 h-12" />
            <p className="mt-2">CEMENT</p>
          </div>
          <div className="flex flex-col items-center">
            <BusIcon className="w-12 h-12" />
            <p className="mt-2">TRANSPORTATION</p>
          </div>
          <div className="flex flex-col items-center">
            <PentagonIcon className="w-12 h-12" />
            <p className="mt-2">DEFENSE AND MARINE</p>
          </div>
          <div className="flex flex-col items-center">
            <RailSymbolIcon className="w-12 h-12" />
            <p className="mt-2">RAILWAYS & AIRPORTS</p>
          </div>
          <div className="flex flex-col items-center">
            <CarIcon className="w-12 h-12" />
            <p className="mt-2">AUTOMOTIVE</p>
          </div>
          <div className="flex flex-col items-center">
            <ConstructionIcon className="w-12 h-12" />
            <p className="mt-2">CONSTRUCTION</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusIcon(props) {
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
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}

function CarIcon(props) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function CoinsIcon(props) {
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
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="m16.71 13.88.7.71-2.82 2.82" />
    </svg>
  );
}

function ConstructionIcon(props) {
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
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  );
}

function FactoryIcon(props) {
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
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

function FuelIcon(props) {
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
      <line x1="3" x2="15" y1="22" y2="22" />
      <line x1="4" x2="14" y1="9" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </svg>
  );
}

function PentagonIcon(props) {
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
      <path d="M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z" />
    </svg>
  );
}

function RailSymbolIcon(props) {
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
      <path d="M5 15h14" />
      <path d="M5 9h14" />
      <path d="m14 20-5-5 6-6-5-5" />
    </svg>
  );
}
