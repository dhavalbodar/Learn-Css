import React from "react";
import BannerSection from "./BannerSection";
import NavbarSection from "./NavbarSection";
import HeaderSection from "./HeaderSection";
import CompanyListSection from "./CompanyListSection";
import BigFeaturesSection from "./BigFeaturesSection";
import InfoSection from "./InfoSection";
import ExamplesSection from "./ExamplesSection";

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
  // https://codepip.com/games/
  return (
    <div>
      <BannerSection />
      <NavbarSection navLinkList={navLinkList} />
      <HeaderSection/>
      <CompanyListSection/>
      <BigFeaturesSection/>
      <InfoSection/>
      <ExamplesSection/>
    </div>
  );
};

export default LandingPage;
