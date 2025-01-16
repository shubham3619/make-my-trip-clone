import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Globe, Laptop } from 'lucide-react';

const OtherDetails = () => {
  return (
    <div className="w-full mx-auto py-8">
      {/* Top Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 flex items-center space-x-4">
          <Plane className="w-8 h-8 text-blue-500" />
          <div>
            <h3 className="font-medium">Planning to book an international flight?</h3>
            <a href="#" className="text-blue-500 hover:underline">Check Travel Guidelines</a>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <Globe className="w-8 h-8 text-yellow-500" />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-medium">We are now available in हिंदी!</h3>
            </div>
            <a href="#" className="text-blue-500 hover:underline">Change Language</a>
          </div>
        </Card>

        <Card className="p-4 flex items-center space-x-4">
          <Laptop className="w-8 h-8 text-orange-500" />
          <div>
            <h3 className="font-medium">Complete your web check-in on MakeMyTrip in easy steps.</h3>
            <a href="#" className="text-blue-500 hover:underline">Know More</a>
          </div>
        </Card>
      </div>

      {/* App Download Section */}
      <Card className="mb-8 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Laptop className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Download App Now !</h2>
              <p className="text-sm">
                Use code <span className="font-bold">WELCOMEMMT</span> and get{' '}
                <span className="font-bold">FLAT 12% OFF*</span> on your first domestic flight booking
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex-1 md:flex-none">
              <div className="flex items-center border rounded-md p-2">
                <span className="text-gray-600">🇮🇳 +91</span>
                <input
                  type="text"
                  placeholder="Enter Mobile number"
                  className="ml-2 outline-none flex-1"
                />
              </div>
            </div>
            <Button className="bg-blue-500 text-white">GET APP LINK</Button>
          </div>
        </div>
      </Card>

      {/* Flight Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            city: "Chennai",
            routes: "Via - Delhi, Mumbai, Coimbatore, Madurai",
            icon: "🏖️"
          },
          {
            city: "Goa",
            routes: "Via - Delhi, Mumbai, Bangalore, Ahmedabad",
            icon: "🏖️"
          },
          {
            city: "Mumbai",
            routes: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
            icon: "🏰"
          },
          {
            city: "Hyderabad",
            routes: "Via - Chennai, Mumbai, Bangalore, Delhi",
            icon: "🏛️"
          },
          {
            city: "Delhi",
            routes: "Via - Mumbai, Pune, Bangalore, Chennai",
            icon: "🏛️"
          },
          {
            city: "Pune",
            routes: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
            icon: "🏰"
          },
          {
            city: "Kolkata",
            routes: "Via - Delhi, Mumbai, Bangalore, Pune",
            icon: "🌆"
          },
          {
            city: "Bangalore",
            routes: "Via - Delhi, Pune, Mumbai, Kolkata",
            icon: "🌆"
          },
          {
            city: "Jaipur",
            routes: "Via - Mumbai, Delhi, Pune, Bangalore",
            icon: "🏰"
          }
        ].map((flight, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">{flight.icon}</span>
              <div>
                <h3 className="font-medium">{flight.city} Flights</h3>
                <p className="text-sm text-gray-600">{flight.routes}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OtherDetails;