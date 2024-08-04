// src/components/ExampleComponent.tsx
import React from "react";

const ExampleComponent: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-light-DEFAULT dark:bg-dark-DEFAULT p-4 mb-4 rounded">
        Default Background
      </div>
      <div className="bg-light-50 dark:bg-dark-50 p-4 mb-4 rounded">
        Background 50
      </div>
      <div className="bg-light-100 dark:bg-dark-100 p-4 mb-4 rounded">
        Background 100
      </div>
      <div className="bg-light-300 dark:bg-dark-300 p-4 mb-4 rounded">
        Background 300
      </div>
      <div className="bg-light-600 dark:bg-dark-600 p-4 mb-4 rounded">
        Background 600
      </div>
      <div className="bg-light-900 dark:bg-dark-900 p-4 mb-4 rounded">
        Background 900
      </div>
      <div className="bg-gradient-to-r from-light-linear to-light-DEFAULT dark:from-dark-linear dark:to-dark-DEFAULT p-4 mb-4 rounded">
        Linear Gradient
      </div>
      <div className="bg-blur-50 bg-opacity-75 p-4 mb-4 rounded">
        Blur Effect
      </div>
      <div className="bg-light-glassmorphism dark:bg-dark-glassmorphism backdrop-filter backdrop-blur-lg p-4 mb-4 rounded">
        Glassmorphism Effect
      </div>

      <div className="bg-gradient-radial p-4 mb-4 rounded text-white">
        Radial Gradient
      </div>
      <div className="gradient-text w-fit font-black font-manrope p-4 mb-4 rounded text-white">
        Linear Gradient
      </div>
      <div className="bg-gradient-conic p-4 mb-4 rounded text-white">
        Conic Gradient
      </div>
      <h1 className="text-4xl font-inter">Header with Inter</h1>
      <h2 className="text-3xl font-manrope">Subheader with Manrope</h2>
      <p className="text-xl font-worksans">Paragraph with Work Sans</p>
    </div>
  );
};

export default ExampleComponent;
