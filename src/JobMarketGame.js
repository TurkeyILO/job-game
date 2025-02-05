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
   
