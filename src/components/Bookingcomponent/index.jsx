import {
  Banknote,
  BriefcaseMedical,
  Bus,
  Car,
  Gift,
  Globe,
  Hotel,
  House,
  Plane,
  Shield,
  Train,
  Umbrella,
  Users,
} from "lucide-react";
import React from "react";
//import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FareOption = ({ label, sublabel, active = false }) => (
  <div
    className={`border rounded-lg p-3 cursor-pointer ${
      active ? "border-blue-500 bg-blue-50" : "border-gray-200"
    }`}
  >
    <RadioGroup defaultValue={active ? label : ""}>
      <div className="flex items-start gap-2">
        <RadioGroupItem value={label} id={label} className="mt-1" />
        <div>
          <Label htmlFor={label} className="font-medium">
            {label}
          </Label>
          <p className="text-xs text-gray-500 hidden md:block">{sublabel}</p>
        </div>
      </div>
    </RadioGroup>
  </div>
);

const bookings = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="bg-white hidden md:absolute top-20 md:flex justify-center self-center rounded-lg shadow-lg p-4 z-10">
        <ul className="flex justify-center items-center gap-6">
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <Plane />
            <p className="text-xs text-gray-500">Flights</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <Hotel />
            <p className="text-xs text-gray-500">Hotels</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <House />
            <p className="text-xs text-gray-500">Homestays & Villas</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <Umbrella />
            <p className="text-xs text-gray-500">Holiday Packages</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <Train />
            <p className="text-xs text-gray-500">Trains</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <Bus />
            <p className="text-xs text-gray-500">Buses</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <Car />
            <p className="text-xs text-gray-500">Cabs</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <Banknote />
            <p className="text-xs text-gray-500">Forex Card & Currency</p>
          </li>
          <li className="flex flex-col items-center gap-2 text-center w-[90px]">
            <BriefcaseMedical />
            <p className="text-xs text-gray-500">Travel Insurance</p>
          </li>
        </ul>
      </div>

      <div className="w-full flex justify-center">
        <Card className="p-4 w-full md:mt-10   mx-auto md:pt-16 pt-6 flex flex-col bg-white">
          {/* Trip Type Selection */}

          <div className="mb-6">
            <RadioGroup defaultValue="one-way" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-way" id="one-way" />
                <Label htmlFor="one-way">One Way</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="round-trip" id="round-trip" />
                <Label htmlFor="round-trip">Round Trip</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="multi-city" id="multi-city" />
                <Label htmlFor="multi-city">Multi City</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Search Fields */}
          <div className="grid md:grid-cols-5 grid-cols-2 mb-6 border border-gray-200 rounded-lg overflow-hidden">
            <div className="col-span-1 p-4 border-r border-gray-200">
              <Label className="text-sm text-gray-500">From</Label>
              <div className="text-xl font-bold">Delhi</div>
              <div className="text-sm text-gray-500">
                DEL, Delhi Airport India
              </div>
            </div>
            <div className="col-span-1 p-4 border-r border-gray-200">
              <Label className="text-sm text-gray-500">To</Label>
              <div className="text-xl font-bold">Bengaluru</div>
              <div className="text-sm text-gray-500">
                BLR, Bengaluru International Airport
              </div>
            </div>
            <div className="col-span-1 p-4 border-r border-gray-200">
              <Label className="text-sm text-gray-500">Departure</Label>
              <div className="text-xl font-bold">15 Jan'25</div>
              <div className="text-sm text-gray-500">Wednesday</div>
            </div>
            <div className="col-span-1 p-4 border-r border-gray-200">
              <Label className="text-sm text-gray-500">Return</Label>
              <div className="text-sm text-gray-400">
                Tap to add a return date for bigger discounts
              </div>
            </div>
            <div className="col-span-1 p-4">
              <Label className="text-sm text-gray-500">
                Travellers & Class
              </Label>
              <div className="text-xl font-bold">1 Traveller</div>
              <div className="text-sm text-gray-500">
                Economy/Premium Economy
              </div>
            </div>
          </div>
          {/* Fare Types */}
          <div className="mb-6 md:flex gap-2">
            <div>
              <div className="text-sm font-medium mb-2">
                Select a special fare
              </div>
              <div className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded mb-2">
                EXTRA SAVINGS
              </div>
            </div>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
              <FareOption label="Regular" sublabel="Regular fares" active />
              <FareOption label="Student" sublabel="Extra discounts/baggage" />
              <FareOption label="Senior Citizen" sublabel="Up to ₹ 600 off" />
              <FareOption label="Armed Forces" sublabel="Up to ₹ 600 off" />
              <FareOption
                label="Doctor and Nurses"
                sublabel="Up to ₹ 600 off"
              />
            </div>
          </div>

          {/* Search Button */}
        </Card>
        <Button className="w-44 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-3xl md:top-[60%] top-[94%] absolute font-bold text-2xl">
          SEARCH
        </Button>
      </div>


      <div className="w-full bg-white mt-8 md:rounded-full shadow-lg border-gray-200">
      <div className="max-w-7xl mx-auto md:flex grid grid-cols-1 gap-7 justify-between items-center py-2 px-4">
        <div className="flex items-center gap-2 px-3 cursor-pointer hover:bg-gray-50  py-1 border-r border-gray-300">
          <span className="text-blue-600">
            <Globe className="w-4 h-4" />
          </span>
          <div>
            <div className="text-sm font-medium text-gray-700">Where2Go</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 cursor-pointer hover:bg-gray-50  py-1 border-r border-gray-300">
          <span className="text-blue-600">
            <Shield className="w-4 h-4" />
          </span>
          <div>
            <div className="text-sm font-medium text-gray-700">Insurance</div>
            <div className="text-xs text-gray-500">For International Trips</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 cursor-pointer hover:bg-gray-50  py-1 border-r border-gray-300">
          <span className="text-blue-600">
            <Plane className="w-4 h-4" />
          </span>
          <div>
            <div className="text-sm font-medium text-gray-700">Explore International Flights</div>
            <div className="text-xs text-gray-500">Cheapest Flights to Paris, Bali, Tokyo & more</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 cursor-pointer hover:bg-gray-50  py-1 border-r border-gray-300">
          <span className="text-blue-600">
            <Users className="w-4 h-4" />
          </span>
          <div>
            <div className="text-sm font-medium text-gray-700">MICE</div>
            <div className="text-xs text-gray-500">Offsites, Events & Meetings</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-3 cursor-pointer hover:bg-gray-50  py-1 border-r">
          <span className="text-blue-600">
            <Gift className="w-4 h-4" />
          </span>
          <div>
            <div className="text-sm font-medium text-gray-700">Gift Cards</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default bookings;
