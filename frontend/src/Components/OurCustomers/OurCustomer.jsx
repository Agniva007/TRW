import React from 'react';

const OurCustomers = () => {
  return (
    <section className="w-full py-12 md:py-18 lg:py-30">
    <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Customers
          </h2>
          <p className="mt-4 max-w-6xl">
            Our esteemed clients span various industries, reflecting the trust and quality we deliver. We are proud to serve these leading brands and continue to grow alongside them.
          </p>
        </div>
      <div className="overflow-hidden">
        <div className="animate-marquee flex space-x-10">
          {/* Add customer logos or names here */}
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727257767/logo_nxr9wg.png" alt="Rashmi Group" srcset="" /></div>
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727257982/crescent_lzkwdr.png" alt="Crescent Foundry" srcset="" /></div>
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727258087/rbac_f4zxal.png" alt="RB Agarwalla & Co" srcset="" /></div>
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727258250/kejriwal_cq5kls.png" alt="Kejriwal Castings Ltd." srcset="" /></div>
          {/* Repeat customer divs or map over an array of customer data */}
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727258490/iac_ywbyjd.png" alt="IAC Electricals" srcset="" /></div>
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727258591/taxmaco_rwr3qa.png" alt="Taxmaco Rail & Engineering" srcset="" /></div>
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727258819/Kiswok_ivzqlv.png" alt="Kiswok Industries" srcset="" /></div>
          <div className="w-40 h-20 flex items-center justify-center rounded-md shadow-md"><img src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1727258980/ShipSmith_ktgczp.png" alt="Kejriwal Castings Ltd." srcset="" /></div>
          {/* Repeat customer divs or map over an array of customer data */}
        </div>
      </div>
    </div>
    </section>
  );
};

export default OurCustomers;
