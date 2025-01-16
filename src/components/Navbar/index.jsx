import React from "react";
import navLogo from "../../assets/logo.avif";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <img className="w-40" src={navLogo} alt="Make My Trip" />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-6 md:gap-8">
          <li>
            <a href="#">
              <h3 className="font-semibold text-sm text-white">List Your Property</h3>
              <p className="text-xs text-gray-400">Grow your business!</p>
            </a>
          </li>
          <li  className="border-l-2 border-r-2 border-dashed border-gray-400 p-2">
            <a href="#">
              <h3 className="font-semibold text-sm text-white">Intodusing myBiz</h3>
              <p className="text-xs text-gray-400">Business Travel Solution</p>
            </a>
          </li>
          <li>
            <a href="#">
              <h3 className="font-semibold text-sm text-white">My Trips</h3>
              <p className="text-xs text-gray-400">Manage your bookings</p>
            </a>
          </li>
          <li>
            <Button className="text-[12px] w-[200px] bg-gradient-to-r from-blue-300 to-blue-700">Login or Create Account</Button>
          </li>
          <li>
            <Button className=" bg-white/10">IN|ENG
              <span><ChevronDown /></span>
            </Button>
          </li>
          <li>
            <Button className="bg-white/10 ">INR
            <span><ChevronDown /></span>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
