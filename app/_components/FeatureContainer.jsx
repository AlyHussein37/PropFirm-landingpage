import React from "react";
import FeatureCard from "./FeatureCard";

function FeatureContainer() {
  return (
    <>
      <h3 className="text-xl w-full md:text-3xl font-bold mb-6 md:w-1/2 mx-auto leading-10">
        Empowering Forex Brokers with Cutting-Edge Technology
      </h3>
      <div className="grid grid-cols-1">
        <FeatureCard
          title="Forex CRM"
          description="Our CRM provides a unified platform to streamline operations and accelerate growth. Highly flexible and scalable, it seamlessly integrates with our other offerings while allowing endless customization to meet your brokerage’s specific needs"
          image={"/CRM Mokup.png"}
          reverse={false}
        />
        <FeatureCard
          title="IB Portal"
          description="Our Powerful partnership management capabilities for forex brokers. This comprehensive solution equips introducing brokers and affiliates with the tools to drive client aquisition, track performance metrics, view commission payouts, and oversee lead campaigns - all from a centralized interface"
          image={"/IB MOCKUP.png"}
          reverse={true}
        />
        <FeatureCard
          title="Physical Gold System"
          description="Finitic’s Physical Gold System opens new investment frontiers, enabling forex brokers to facilitate buying, selling, and securely holding physical gold assets on behalf of clients"
          image={"/physical gold system mockup.png"}
          reverse={false}
        />
        <FeatureCard
          title="PAMM/MAM"
          description="Our system allows you to tailor tools and settings to your specific needs, creating a streamlined experience for managing pooled accounts. Robust automation consolidates order execution, reporting, and allocation so you can operate funds efficiently."
          image={"/pamm mockup.png"}
          reverse={true}
        />
        <FeatureCard
          title="Client Portal"
          description="Customizable self-service interface for traders. Streamline account management, funding, and reporting while enhancing client engagement and satisfaction"
          image={"/client portal.png"}
          reverse={false}
        />
        <FeatureCard
          title="MT4/5 Administration"
          description="Expert management and optimization of MetaTrader platforms. Ensure peak performance, security, and scalability for your trading infrastructure."
          image={"/MT45 Administration.png"}
          reverse={true}
        />
      </div>
    </>
  );
}

export default FeatureContainer;
