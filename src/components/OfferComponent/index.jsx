import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '@/assets/img1.avif';
import img2 from '@/assets/img2.avif';
import img3 from '@/assets/img3.avif';


const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      type: "INTL FLIGHTS",
      image: img1,
      title: "Grab Up to 40% OFF* on Flights, Stays & More.",
      description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
      terms: "T&C'S APPLY"
    },
    {
      type: "DOM HOTELS",
      image: img2,
      title: "Grab Up to 40% OFF* on Domestic Hotels.",
      description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
      terms: "T&C'S APPLY"
    },
    {
      type: "DOM FLIGHTS",
      image: img3,
      title: "Grab Up to 20% OFF* on Domestic Flights.",
      description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
      terms: "T&C'S APPLY"
    },
    {
      type: "INTL FLIGHTS",
      image: img1,
      title: "Grab Up to ₹15,000 OFF* on International Flights.",
      description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
      terms: "T&C'S APPLY"
    },
    {
        type: "INTL FLIGHTS",
        image: img1,
        title: "Grab Up to 40% OFF* on Flights, Stays & More.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "DOM HOTELS",
        image: img2,
        title: "Grab Up to 40% OFF* on Domestic Hotels.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "DOM FLIGHTS",
        image: img3,
        title: "Grab Up to 20% OFF* on Domestic Flights.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "INTL FLIGHTS",
        image: img1,
        title: "Grab Up to ₹15,000 OFF* on International Flights.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "INTL FLIGHTS",
        image: img1,
        title: "Grab Up to 40% OFF* on Flights, Stays & More.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "DOM HOTELS",
        image: img2,
        title: "Grab Up to 40% OFF* on Domestic Hotels.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "DOM FLIGHTS",
        image: img3,
        title: "Grab Up to 20% OFF* on Domestic Flights.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "INTL FLIGHTS",
        image: img1,
        title: "Grab Up to ₹15,000 OFF* on International Flights.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "INTL FLIGHTS",
        image: img1,
        title: "Grab Up to 40% OFF* on Flights, Stays & More.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "DOM HOTELS",
        image: img2,
        title: "Grab Up to 40% OFF* on Domestic Hotels.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "DOM FLIGHTS",
        image: img3,
        title: "Grab Up to 20% OFF* on Domestic Flights.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      },
      {
        type: "INTL FLIGHTS",
        image: img1,
        title: "Grab Up to ₹15,000 OFF* on International Flights.",
        description: "Tick-that-Bucket-List Sale is LIVE NOW, for your trips this year.",
        terms: "T&C'S APPLY"
      }
  ];

   // Calculate total number of slides (pairs of offers)
   const totalSlides = Math.ceil(offers.length / 2);

   // Check if we're at the start or end
   const isAtStart = currentSlide === 0;
   const isAtEnd = currentSlide === totalSlides - 1;
 
   const handlePrev = () => {
     if (!isAtStart) {
       setCurrentSlide((prev) => prev - 1);
     }
   };
 
   const handleNext = () => {
     if (!isAtEnd) {
       setCurrentSlide((prev) => prev + 1);
     }
   };
  return (
    <Card className="w-full max-w-7xl mt-4 mx-auto">
      <CardContent className="p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-6">
            <h2 className="text-4xl font-extrabold text-gray-800">Offers</h2>
            <div className="flex space-x-4">
              <Button variant="link" className="text-blue-500 font-bold hover:text-blue-600 px-0">All Offers</Button>
              <Button variant="link" className="text-gray-500 hover:text-gray-600 px-0">Flights</Button>
              <Button variant="link" className="text-gray-500 hover:text-gray-600 px-0">Hotels</Button>
              <Button variant="link" className="text-gray-500 hover:text-gray-600 px-0">Holidays</Button>
              <Button variant="link" className="text-gray-500 hover:text-gray-600 px-0">Trains</Button>
              <Button variant="link" className="text-gray-500 hover:text-gray-600 px-0">Cabs</Button>
              <Button variant="link" className="text-gray-500 hover:text-gray-600 px-0">Bank Offers</Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-blue-500">VIEW ALL</Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={isAtStart}
                className={`h-8 w-8 rounded-full ${
                  isAtStart 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={isAtEnd}
                className={`h-8 w-8 rounded-full ${
                  isAtEnd 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        
        </div>

        {/* Sliding Grid Section */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-3 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Group offers into pairs for 2x2 grid */}
            {Array.from({ length: Math.ceil(offers.length / 2) }).map((_, groupIndex) => (
              <div key={groupIndex} className="w-[40%] flex-shrink-0 grid grid-rows-2 gap-4">
                {offers.slice(groupIndex * 2, groupIndex * 2 + 2).map((offer, index) => (
                  <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-1/3">
                          <img 
                            src={offer.image} 
                            alt={offer.title}
                            className="w-full h-32 object-cover rounded-md"
                          />
                        </div>
                        <div className="w-2/3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm text-gray-600">{offer.type}</span>
                            <span className="text-xs text-gray-500">{offer.terms}</span>
                          </div>
                          <h3 className="text-lg font-bold mb-1">{offer.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{offer.description}</p>
                          <Button variant="link" className="text-blue-500 float-right font-extrabold text-md hover:text-blue-600 p-0">
                            BOOK NOW
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Offers;