import React from "react";
import { Separator } from "./ui/separator";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
const CarItem = ({ car }) => {
  return (
    <div className=" relative  cursor-pointer rounded-xl border bg-white hover:shadow-xl">
        <h2 className="absolute m-2 text-xs font-medium rounded-md px-1 text-white bg-green-500 ">New</h2>
      <img
        src={car?.image}
        className="rounded-t-xl"
        width={'100%'}
        height={250}
        alt=""
      />
      <div className="p-4">
        <h2 className="text-black font-semibold text-md lg:text-lg mb-2">
          {car?.name}
        </h2>
        <Separator />
        <div className="grid grid-cols-3 mt-5 mb-5">
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg" />
            <h2 className="font-semibold text-sm text-black mt-2">
              {car?.fuelType}
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <SlSpeedometer className="text-lg" />
            <h2 className="font-semibold text-sm text-black mt-2">
              {car?.miles}
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg" />
            <h2 className="font-semibold text-sm text-black mt-2">
              {car?.gearType}
            </h2>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between my-2">
          <h2 className="font-bold text-lg">${car?.price}</h2>
          <h2 className="text-sm text-primary font-semibold flex items-center space-x-2 cursor-pointer">
            <a href=""> View Details</a>
            <MdOpenInNew />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
