import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import the useHistory hook to navigate to a new page

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
    text: "According to the bank you aren't fit for a loan. Try again?",
    options: [{ text: "Restart", next: "start" }]
  },
  freelance: {
    text: "To compete in the market you need experience. Try again?",
    options: [{ text: "Restart", next: "start" }]
  },
  network: {
    text: "Connections? Do you have any?",
    options: [{ text: "Restart", next: "start" }]
  }
};

const JobMarketGame = () => {
  const [currentStep, setCurrentStep] = useState("start");
  const history = useHistory(); // Use the history hook for navigation

  // Function to handle navigation to the "What do I do?" page
  const goToDiscussionPage = () => {
    history.push("/discussion");
  };

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

      {/* Button to navigate to the discussion page */}
      <div className="mt-4">
        <button
          onClick={goToDiscussionPage}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 w-full transition"
        >
          What do I do?
        </button>
      </div>
    </div>
  );
};

export default JobMarketGame;
