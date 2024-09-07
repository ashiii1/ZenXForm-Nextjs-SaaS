// "use client";
// import { Button } from "@/components/ui/button";
// import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
// import { SignInButton, useUser } from "@clerk/nextjs";

// function Hero() {
//   const { user, isSignedIn } = useUser();

//   const words = [
//     {
//       text: "Transform",
//     },
//     {
//       text: "your",
//     },
//     {
//       text: "ideas into",
//     },
//     {
//       text: "reality with",
//     },
//     {
//       text: "ZenXForms.",
//       className: "text-red-800 dark:text-red-800",
//     },
//   ];

//   return (
//     <div
//       className="flex flex-col items-center mt-0 h-screen bg-black"

//     >
//       <p className="mt-40 text-neutral-400 dark:text-neutral-200 text-xs sm:text-base">
//         Create Dynamic, Customizable Forms Effortlessly Using AI-Powered
//         Recommendations and Beautiful Designs
//       </p>
//       <TypewriterEffectSmooth words={words} />
//       <div className="mt-8 flex flex-wrap justify-center">
//         {isSignedIn ? <a
//           className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
//           href="/dashboard"
//         >Create AI Form</a> :       <SignInButton>
//         <Button>Create AI Form</Button>
//       </SignInButton> }
        
    
       
//       </div>
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"></div>
//     </div>
//   );
// }

// export default Hero;

"use client";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function Hero() {
  const { user, isSignedIn } = useUser();

  const words = [
    { text: "Transform" },
    { text: "your" },
    { text: "ideas into" },
    { text: "reality with" },
    { text: "ZenXForms.", className: "text-red-800 dark:text-red-800" },
  ];

  return (
    <div className="flex flex-col items-center mt-0 h-screen bg-gradient-to-br from-blue-500 to-violet-800 relative">
      <div className="absolute w-full h-full opacity-20">
        {/* Placeholder for SVG */}
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,165.3C480,160,600,160,720,144C840,128,960,96,1080,122.7C1200,149,1320,235,1380,277.3L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
      <p className="mt-40 text-neutral-400 dark:text-neutral-200 text-xs sm:text-base z-10">
        Create Dynamic, Customizable Forms Effortlessly Using AI-Powered
        Recommendations and Beautiful Designs
      </p>
      <TypewriterEffectSmooth words={words} className="z-10" />
      <div className="mt-8 flex flex-wrap justify-center z-10">
        {isSignedIn ? (
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
            href="/dashboard"
          >
            Create AI Form
          </a>
        ) : (
          <SignInButton>
            <Button>Create AI Form</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

function SlidingNames() {
  const [moveLeft, setMoveLeft] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveLeft((prev) => !prev);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-16 bg-gray-800 text-white flex items-center justify-center">
      <div
        className={`absolute whitespace-nowrap ${
          moveLeft ? "animate-moveLeft" : "animate-moveRight"
        }`}
      >
        <span className="mx-8">Feature 1: AI-Powered Forms</span>
        <span className="mx-8">Feature 2: Custom Themes</span>
        <span className="mx-8">Feature 3: Editable Fields</span>
        <span className="mx-8">Feature 4: Real-time Preview</span>
      </div>
      <style jsx>{`
        @keyframes moveLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes moveRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-moveLeft {
          animation: moveLeft 10s linear infinite;
        }

        .animate-moveRight {
          animation: moveRight 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

function PricingCards() {
  return (
    <div className="flex flex-col items-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Choose Your Pricing Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
          <p className="text-gray-600 mb-4">$10 / month</p>
          <ul className="mb-4">
            <li className="mb-2">Access to AI Forms</li>
            <li className="mb-2">Basic Customization</li>
            <li className="mb-2">5 Forms per month</li>
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Choose Plan
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
          <p className="text-gray-600 mb-4">$30 / month</p>
          <ul className="mb-4">
            <li className="mb-2">Everything in Basic</li>
            <li className="mb-2">Advanced Customization</li>
            <li className="mb-2">20 Forms per month</li>
          </ul>
          <button className="bg-violet-500 text-white py-2 px-4 rounded hover:bg-violet-700">
            Choose Plan
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-8 transition transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
          <p className="text-gray-600 mb-4">Contact Us</p>
          <ul className="mb-4">
            <li className="mb-2">Everything in Pro</li>
            <li className="mb-2">Unlimited Forms</li>
            <li className="mb-2">Priority Support</li>
          </ul>
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p>&copy; 2024 ZenXForms. All rights reserved.</p>
      <div className="mt-4">
        <a href="/privacy" className="text-blue-400 hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms" className="text-blue-400 hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <SlidingNames />
      <PricingCards />
      <Footer />
    </div>
  );
}
