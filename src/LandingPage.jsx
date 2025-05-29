import React from "react";
import { useNavigate } from "react-router-dom";
import life from "/src/assets/life.jpg";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/MainPage"); // Navigate to the dashboard
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${life})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen p-auto m-auto text-center">
        <div className="mt-140">
          <button
            onClick={handleNavigate}
            className="px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-500 font-semibold shadow-md"
          >
            Welcome Onboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
