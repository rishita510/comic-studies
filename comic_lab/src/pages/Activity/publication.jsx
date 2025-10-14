import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";
import publication1Image from "../../assets/publication1.png"; // Import your image here

const Publications = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <div className="text-center mb-10">
            <h1 className="text-6xl md:text-7xl font-bold text-white">Publications</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              We have also published.
            </h2>
          </div>

          {/* Visibility Items */}
          <div
            className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full"
            style={{ minHeight: "50vh" }}
          >
            <VisibilityItem
              label="Publication 1"
              onClick={() => window.open("https://zubaanprojects.org/projects/fragrance-of-peace/e-essays/")}
              imageSrc={publication1Image}
            />
            {/* Add more publications as needed */}
          </div>

          <div className="text-center py-6 md:pb-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              WE WILL MAKE A DIFFERENCE TOGETHER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable item component for text link with an image below, centered
const VisibilityItem = ({ label, onClick, imageSrc }) => (
  <div
    onClick={onClick}
    className="cursor-pointer text-3xl font-semibold inline-block text-center p-4 rounded-md w-3/4 md:w-1/2 mb-4"
  >
    <span className="block text-white">{label}</span>
    <img
      src={imageSrc}
      alt={label}
      className="w-1/2 mx-auto h-auto object-contain mt-4 rounded-md" // Centered image
    />
  </div>
);

export default Publications;