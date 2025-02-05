import React, { useState } from "react";

const scenarios = {
  start: {
    text: "Welcome to the Job Market Game! Choose your path:",
    options: [
      { text: "Apply for a Job", next: "apply" },
      { text: "Start a Business", next: "business" },
      { text: "Network for Opportunities", next: "network" }
    ]
  },
  apply: {
    text: "You submitted your CV. What do you do next?",
    options: [
      { text: "Wait for a response", next: "no_response" },
      { text: "Keep applying", next: "more_apps" }
    ]
  },
  no_response: {
    text: "You never hear back. Try again?",
    options: [{ text: "Restart", next: "start" }]
  },
  more_apps: {
    text: "You apply to many jobs, but only unpaid internships respond. Try again?",
    options: [{ text: "Restart", next: "start" }]
  },
  business: {
    text: "Starting your own business! What's next?",
    options: [
      { text: "Apply for a loan", next: "loan" },
      { text: "Start freelancing", next: "freelance" }
    ]
  },
  loan: {
    text: "Loan application gets stuck in paperwork. Try again?",
    options: [{ text: "Restart", next: "start" }]
  },
  freelance: {
    text: "Freelancing is tough without experience. Try again?",
    options: [{ text: "Restart", next: "start" }]
  },
  network: {
    text: "Your connections help, but is this fair for everyone?",
    options: [{ text: "Restart", next: "start" }]
  }
};

const JobMarketGame = () => {
  const [currentStep, setCurrentStep] = useState("start");

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-6 text-center relative">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" 
        alt="Turkey Flag" 
        className="absolute top-4 left-4 w-12 h-8" 
      />
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">{scenarios[currentStep].text}</h1>
        <div className="space-y-4">
          {scenarios[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(option.next)}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:from-indigo-600 hover:to-blue-500 transition-all"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobMarketGame;
