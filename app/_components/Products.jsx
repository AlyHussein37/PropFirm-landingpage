import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div id="products">
      <h3 className="text-3xl font-bold mb-2 text-orange-500">Our Products</h3>
      <h5 className="text-4xl font-bold mb-10 text-blue-950 dark:text-white">
        Innovative Trading <span className="text-orange-500">Solutions</span>
        <div className="bg-orange-500 w-20 h-1 mx-auto mt-5"></div>
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ProductCard
          title="Forex CRM"
          description="Streamline operations with our comprehensive client management system. Optimize lead conversion, automate workflows, and gain powerful insights"
        />
        <ProductCard
          title="IB Portal"
          description="Empower your introducing brokers with robust tools. Track performance, manage commissions, and boost partner aquisition effortlessly"
        />
        <ProductCard
          title="Physical Gold System"
          description="Expand your offerings with our innovative physical gold trading platform. Provide clients secure access to precious metal investments"
        />
        <ProductCard
          title="PAMM/MAM"
          description="Attract fund managers and investors with flexible multi-account management. Automate allocations and enhance your brokerage’s appeal"
        />
      </div>
    </div>
  );
}

export default Products;
