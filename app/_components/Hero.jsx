"use client";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";
import { SignInButton, useUser } from "@clerk/nextjs";

function Hero() {
  const { user, isSignedIn } = useUser();

  const words = [
    {
      text: "Transform",
    },
    {
      text: "your",
    },
    {
      text: "ideas into",
    },
    {
      text: "reality with",
    },
    {
      text: "ZenXForms.",
      className: "text-red-800 dark:text-red-800",
    },
  ];

  return (
    <div
      className="flex flex-col items-center mt-0 h-screen bg-black"

    >
      <p className="mt-40 text-neutral-400 dark:text-neutral-200 text-xs sm:text-base">
        Create Dynamic, Customizable Forms Effortlessly Using AI-Powered
        Recommendations and Beautiful Designs
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="mt-8 flex flex-wrap justify-center">
        {isSignedIn ? <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-900 sm:w-auto"
          href="/dashboard"
        >Create AI Form</a> :       <SignInButton>
        <Button>Create AI Form</Button>
      </SignInButton> }
        
    
       
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"></div>
    </div>
  );
}

export default Hero;
