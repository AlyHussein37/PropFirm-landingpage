import React from "react";
import Feature from "./Feature";

function Features() {
  return (
    <div id="features">
      <h3 className="text-3xl font-bold mb-6">Finitic Features</h3>
      <h5 className="text-4xl font-bold mb-10 text-blue-950 dark:text-white">
        Powering Your <span className="text-orange-500">Success</span>
        <div className="bg-orange-500 w-20 h-1 mx-auto mt-5"></div>
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Feature
          title="Scalable Platform"
          description="Robust infrastructure supporting exponential growth."
          image={"/scalable platform.png"}
        />
        <Feature
          title="Account Management"
          description="Streamlined client lifecycle and account oversight."
          image={"/account management.png"}
        />
        <Feature
          title="Easy to Use"
          description="Intuitive design for increased productivity."
          image={"/easy to use.png"}
        />
        <Feature
          title="Automated Reporting"
          description="Advanced reporting for data-driven decision making."
          image={"/Automated Reporting.png"}
        />
        <Feature
          title="Risk Management Tools"
          description="Real-time monitoring and alerts."
          image={"/Risk Management Tools.png"}
        />
        <Feature
          title="Multi-Asset Support"
          description="Manage various instruments on one platform."
          image={"/Multi-Asset Support.png"}
        />
      </div>
    </div>
  );
}

export default Features;
