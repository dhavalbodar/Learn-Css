import React from "react";
import BannerSection from "./BannerSection";
import NavbarSection from "./NavbarSection";

const LandingPage = () => {
  const navLinkList = [
    {
      label: "Product",
      link: "#",
    },
    {
      label: "Customer",
      link: "#",
    },
    {
      label: "Pricing",
      link: "#",
    },
    {
      label: "Resources",
      link: "#",
    },
  ];
  return (
    <div>
      <BannerSection />
      <NavbarSection navLinkList={navLinkList} />
    </div>
  );
};

export default LandingPage;
