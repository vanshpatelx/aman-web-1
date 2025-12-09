import { ChevronRight } from "lucide-react";
import React from "react";

const products = [
  {
    id: 1,
    stock: "1 in stock",
    img: "https://myvisionsurplus.com/cdn/shop/files/IMG_6758_720x.png?v=1761855943",
    title:
      "Applied Materials 0010-30687 High Efficiency RF Match for MXP Etch Chamber",
    price: "$12,000.00 USD",
    button: true,
  },
  {
    id: 2,
    stock: "1 in stock",
    img: "https://i.ebayimg.com/images/g/RlgAAOSwQ6BnzwPm/s-l1600.webp",
    title:
      "Applied Materials 0190-62001 Edwards STP-F2203C Turbomolecular Pump 27000 RPM",
    price: "$11,500.00 USD",
    button: true,
  },
  {
    id: 3,
    stock: "1 in stock",
    img: "https://i.ebayimg.com/images/g/dEcAAOSwiRFkrCVg/s-l1600.webp",
    title:
      "AMAT Applied Materials 0190-54601 SMC Thermo Chiller INR-498-016E-X007",
    price: "$15,000.00 USD",
    button: true,
  },
  {
    id: 4,
    img: "https://myvisionsurplus.com/cdn/shop/products/403996240982-0_720x.jpg?v=1671806551",
    title:
      "Applied Materials AMAT DPS Centura Rasco Chiller Heat Exchanger WTC-A182-AMJ",
    price: "$6,000.00 USD",
    soldOut: true,
    button: true,
  },
];

const ProductCard = ({ item }) => {
  return (
    <div className="min-w-[260px] sm:min-w-0 snap-start bg-[#0A0C1A] p-3 sm:p-4 rounded-xl hover:-translate-y-1 transition-all border border-white/10">
      <div className="relative">
        {item.stock && (
          <span className="absolute top-5 sm:top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {item.stock}
          </span>
        )}

        <img src={item.img} className="w-full h-64 object-cover" alt="" />
      </div>
      

      <h3 className="text-white mt-4 text-sm font-medium leading-relaxed">
        {item.title}
      </h3>
     
     <div className="flex justify-between items-center w-full">
      <p className="text-gray-300 mt-2 text-sm">{item.price}</p>
      {item.soldOut && (
        <p className="text-red-400 text-sm mt-1">Sold Out</p>
      )}
     </div>


      {item.button && (
        <button className="bg-[#1D4ED8] hover:bg-blue-600 cursor-pointer text-white w-full py-2 my-3 rounded-[4px] flex justify-between items-center px-3.5">
           {item.soldOut ? "Notify me" : "Quick buy"} <ChevronRight size={18}/>
        </button>
      )}

      
    </div>
  );
};

function QuickBuy() {
  return (
    <section className="w-full bg-[#00020F] py-20">
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-6 xl:px-0 mx-auto">
        
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:items-center justify-between mb-10">
          <h2 className="text-white text-3xl font-semibold tracking-wide">
            Featured Items
          </h2>
          <a
            href="/products"
            className="text-blue-400 hover:text-blue-300 transition-all text-sm"
          >
            View All
          </a>
        </div>

        {/* Product List */}
        <div
          className="
          w-full
            flex sm:grid 
            sm:grid-cols-2 lg:grid-cols-4 
            gap-10 
            overflow-x-auto sm:overflow-visible 
            snap-x snap-mandatory 
            scrollbar-hide
          "
        >
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickBuy;
