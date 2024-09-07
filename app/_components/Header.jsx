"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const { user, isSignedIn } = useUser();
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    !path.includes("aiform") && (
      <div className="p-0 px-5 border-b shadow-sm bg-blue-900">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
          <div className="flex p-2">

            <Image src={"/amds.png"} width={50} height={60} alt="logo" />{" "}
            <h2 className="text-white pl-2 pt-2 text-2xl" >ZenXForms</h2>
            </div>

          </Link>

          {isSignedIn ? (
            <div className="flex items-center gap-5">
              {/* <Link href={"/dashboard"}>
                <Button data-theme="retro" variant="outline text-white" >Dashboard</Button>
              </Link> */}
              <UserButton />
            </div>
          ) : (
            <SignInButton>
              <Button>Get Started</Button>
            </SignInButton>
          )}
        </div>
      </div>
    )
  );
}

export default Header;
