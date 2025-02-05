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
  const [showMessage, setShowMessage] = useState(false);

  const handleWhatToDoClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="
