import React, { useState } from "react";
import Header from "../components/HeaderComponent";
import LayananList from "../components/LayananCardComponent";
import BsnSupportComponent from "../components/BsnSupportComponent";
import DetailLayananComponent from "../components/DetailLayananComponent";

const HomePage = () => {
  const [selectedLayanan, setSelectedLayanan] = useState(null);

  const handleLayananSelect = (layananId) => {
    setSelectedLayanan(layananId);
  };

  return (
    <div className="homepage">
      <Header />
      <LayananList onLayananSelect={handleLayananSelect} />
      <BsnSupportComponent />
      <DetailLayananComponent selectedLayanan={selectedLayanan} />
    </div>
  );
};

export default HomePage;
