import { useState, useEffect } from "react";
import { logo } from "./assets";

const App = () => {
  // Target date for the countdown (replace with your desired launch date)
  const targetDate = new Date("2025-02-28T00:00:00").getTime();

  // State to store remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval); // Stop the timer once the target date is reached
      } else {
        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the state with the remaining time
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-earthy-beige via-earthy-tan to-earthy-yellow flex items-center justify-center p-4">
      <div className="max-w-xl text-center relative z-10">
        {/* Logo Section */}
        <div className="mb-8 flex justify-center items-center">
          <img
            src= {logo} // Replace with your logo
            alt="Company Logo"
            className="w-16"
          />
          <p className="text-5xl font-bold text-earthy-brown">Aaroth</p>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-earthy-brown mb-4">
          Our Online Presence is Launching Soon!
        </h1>

        {/* Description */}
        <p className="text-xl text-olive mb-6">
            We officially launched on December 31, 2024, and are currently operating offline. Our team is working diligently to bring you an exceptional agritech experience. Stay tuned for more updates as we prepare to go live online!
        </p>

        {/* Countdown Timer Section */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-forest">{timeLeft.days}</div>
            <div className="text-sm text-earthy-brown">Days</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-forest">{timeLeft.hours}</div>
            <div className="text-sm text-earthy-brown">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-forest">{timeLeft.minutes}</div>
            <div className="text-sm text-earthy-brown">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-forest">{timeLeft.seconds}</div>
            <div className="text-sm text-earthy-brown">Seconds</div>
          </div>
        </div>

        {/* Call to Action */}
        <p className="text-lg text-earthy-brown mb-4">
          Follow us on social media for updates:
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/amararothfb/" className="text-3xl text-forest hover:text-olive">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-earthy-brown">
          <p>© 2024 Aaroth. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
