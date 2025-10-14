import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg1.png';

const Scholar = () => {
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
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">Scholars</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Our Scholars
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full">
            <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed space-y-2 text-white">
              <li>Ann Miller, University of Leicester</li>
              <li>Professor Anthony Fung, Chinese University of Hong Kong</li>
              <li>Boris Pun, Chinese University of Hong Kong</li>
              <li>Joan Ormrod, Routledge Journal of Graphic Novels and Comics</li>
              <li>Kinko Ito, University of Arkansas at Little Rock</li>
              <li>Maaheen Ahmed, Ghent University</li>
              <li>Simon Grennan, University of Chester</li>
              <li>Stephan Packard, University of Cologne</li>
              <li>Tahneer Oksman, Marymount Manhattan College</li>
            </ul>
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

export default Scholar;