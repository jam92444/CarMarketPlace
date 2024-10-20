import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between p-5 shadow-sm">
      <img src="/logo.svg" alt="" width={150} height={100} />
      <ul className="hidden md:flex gap-16 font-semibold">
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
        <li className="font-md hover:scale-105 transition-all cursor-pointer hover:text-primary">Preowned</li>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <Button>Submit Listing</Button>
      )}
    </div>
  );
};

export default Header;
