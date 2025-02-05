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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">{scenarios[currentStep].text}</h1>
        <div className="space-y-3">
          {scenarios[currentStep].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(option.next)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full transition"
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
