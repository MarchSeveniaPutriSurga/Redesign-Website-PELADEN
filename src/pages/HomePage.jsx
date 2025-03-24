import React from "react";
import Header from "../components/HeaderComponent";
import LayananList from "../components/LayananCardComponent";
import BsnSupportComponent from "../components/BsnSupportComponent";
import DetailLayananComponent from "../components/DetailLayananComponent";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <LayananList />
      <BsnSupportComponent />
      <DetailLayananComponent />
    </div>
  );
};

export default HomePage;
