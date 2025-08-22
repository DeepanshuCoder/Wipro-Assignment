import React, { useState, useEffect } from "react";

// In this project i can use multiple useEffect Hook 
const FestivalApp = () => {
  // useState Hook for festival
  const [festival, setFestival] = useState("Diwali");
  // useState Hook for countdown
  const [countdown, setCountdown] = useState(5);

  // log on every render
  useEffect(() => {
    console.log("Festival App Rendered");
  });

  // welcome alert once
  useEffect(() => {
    alert("Welcome to Diwali Festival App");
  }, []);

  // log when festival changes
  useEffect(() => {
    console.log(`Festival changed to ${festival}. Seconds left: ${countdown}`);
  }, [festival]);

  // countdown timer with cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  // log when festival or countdown changes
  useEffect(() => {
    console.log(`Festival: ${festival}, Countdown: ${countdown}`);
  }, [festival, countdown]);

  return (
    <div>
      <h2>{festival} Festival App</h2>
      <p>Countdown: {countdown}</p>
      {/* in the buttons use the setState function to change festival */}
      <button onClick={() => setFestival("Holi")}>Holi</button>
      <button onClick={() => setFestival("Pongal")}>Pongal</button>
    </div>
  );
};

export default FestivalApp;
