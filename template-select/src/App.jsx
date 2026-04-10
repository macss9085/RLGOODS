import React from "react";
import Works from "./sections/Works";

const App = () => {
  const params = new URLSearchParams(window.location.search);
  const caseParam = params.get("case") || "";

  const caseNames = {
    "lego-official": "LEGO Official Display Case",
    "wicked-brick": "Wicked Brick Single Case",
    "idisplayit": "iDisplayit Acrylic Case",
    "xin-shi": "XIN-SHi Case",
    "pokiiulk": "Pokiiulk Case",
    "custom": "Custom Size",
  };

  const caseName = caseNames[caseParam] || "Your Case";

  return (
    <div className="relative w-screen min-h-screen overflow-x-auto bg-[#f0ede6]">
      <Works caseName={caseName} />
    </div>
  );
};

export default App;
