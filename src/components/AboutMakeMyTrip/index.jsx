// import React from "react";

// const About = () => {
//   const qaData = [
//     {
//       question: "How do I make a flight booking on MakeMyTrip?",
//       answer:
//         "You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip flight booking page, Enter your departure and arrival destinations, Select your air travel dates, Choose from our wide range of cheap flights based on your airfare preferences, Click on 'Book Now' and your air flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking. Download the MakeMyTrip app. Put in the details i.e. date of journey, departure and arrival destinations, travel class of your choice, Select on your best comfortable option and click on 'Book Now'.",
//     },
//     {
//       question: "Can I avail domestic flight offers on MakeMyTrip?",
//       answer:
//         "Of course, you can. While making domestic flight bookings, you can avail any special offer that is active at that time. In accordance with the offer selected, a listing of the cheapest flights would show up on your screen. You can then apply the price filter and click on the downwards arrow, following which budget-friendly flights would start showing up in ascending order from the top (lowest price on top).",
//     },
//     {
//       question: "How can I avail budget air tickets on MakeMyTrip?",
//       answer:
//         "It's super-easy to avail budget airfare while booking your cheap flight tickets on MakeMyTrip. Just select the 'Price' filter once the available flight options are displayed and adjust according to your convenience. On the MakeMyTrip app, you can select the downward arrow, which will show the lowest airfare at the top and continue downward in ascending order.",
//     },
//     {
//       question:
//         "Why could I not avail the flight booking offers at the time of checkout?",
//       answer:
//         "MakeMyTrip makes use of a world-class real-time reservation database to list airfare and availability. As dynamic changes in airfare take place, or the available flight tickets sell out, the database reflects the changes in real-time. Hence, we suggest, you double-check online flight booking prices when purchasing flight tickets, as the airfare might have been dynamically updated since you first selected the air travel dates or planned your itinerary.",
//     },
//   ];

//   const footerSections = [
//     {
//       title: "MAKEMYTRIP",
//       links: [
//         { text: "About Us", url: "#" },
//         { text: "Investor Relations", url: "#" },
//         { text: "Careers", url: "#" },
//         { text: "Sustainability", url: "#" },
//         { text: "MMT Foundation", url: "#" },
//         { text: "Legal Notices", url: "#" },
//         { text: "CSR Policy & Committee", url: "#" },
//         { text: "myPartner - Travel Agent Portal", url: "#" },
//         { text: "List your hotel", url: "#" },
//         { text: "Partners- Redbus", url: "#" },
//         { text: "Partners- Goibibo", url: "#" },
//         { text: "Advertise with Us", url: "#" },
//         { text: "Holiday-Franchise", url: "#" },
//       ],
//     },
//     {
//       title: "ABOUT THE SITE",
//       links: [
//         { text: "Customer Support", url: "#" },
//         { text: "MMT Black Loyalty Program", url: "#" },
//         { text: "Payment Security", url: "#" },
//         { text: "Privacy Policy", url: "#" },
//         { text: "Cookie Policy", url: "#" },
//         { text: "User Agreement", url: "#" },
//         { text: "Terms of Service", url: "#" },
//         { text: "Franchise Offices", url: "#" },
//         { text: "Make A Payment", url: "#" },
//         { text: "Work From Home", url: "#" },
//         { text: "Escalation Channel", url: "#" },
//       ],
//     },
//     {
//       title: "PRODUCT OFFERING",
//       links: [
//         "Flights",
//         "International Flights",
//         "Charter Flights",
//         "Hotels",
//         "International Hotels",
//         "Homestays and Villas",
//         "Activities",
//         "Holidays In India",
//         "International Holidays",
//         "Book Hotels From UAE",
//         "myBiz for Corporate Travel",
//         "Book Online Cabs",
//         "Book Bus Tickets",
//         "Book Train Tickets",
//         "Cheap Tickets to India",
//         "Book Flights From US",
//         "Book Flights From UAE",
//         "Trip Planner",
//         "Gift Cards",
//         "Travel Blog",
//         "PNR Status",
//         "International Travel Guide",
//       ],
//     },
//     {
//       title: "QUICK LINKS",
//       links: [
//         { text: "Flights Discount Coupons", url: "#" },
//         { text: "Domestic Airlines", url: "#" },
//         { text: "Indigo Airlines", url: "#" },
//         { text: "Air Asia", url: "#" },
//         { text: "SpiceJet", url: "#" },
//         { text: "GoAir", url: "#" },
//         { text: "Air India", url: "#" },
//         { text: "Air India Express", url: "#" },
//         { text: "Vistara", url: "#" },
//         { text: "New Delhi Mumbai Flights", url: "#" },
//         { text: "Pune Delhi Flights", url: "#" },
//       ],
//     },
//     {
//       title: "IMPORTANT LINKS",
//       links: [
//         { text: "Cheap Flights", url: "#" },
//         { text: "Flight Status", url: "#" },
//         { text: "Domestic Airlines", url: "#" },
//         { text: "International Airlines", url: "#" },
//         { text: "Indian Railways", url: "#" },
//         { text: "Trip Ideas", url: "#" },
//         { text: "Beaches", url: "#" },
//         { text: "Honeymoon Destinations", url: "#" },
//         { text: "Romantic Destinations", url: "#" },
//       ],
//     },
//     {
//       title: "CORPORATE TRAVEL",
//       links: [
//         "Business Travel",
//         "Corporate Travel",
//         "Corporate Travel Management",
//         "Corporate Travel Solution",
//         "Corporate Hotel Booking",
//         "Corporate Flight Booking",
//         "Expense Management",
//         "Corporate Expense Management",
//         "GST on Hotel Rooms",
//         "GST Invoice for Bus",
//         "GST Invoice for Corporate Travel",
//         "myBiz for Small Business",
//         "Free cancellation on International Flights",
//       ],
//     },
//     {
//       title: "ABOUT THE SITE",
//       links: [
//         "Customer Support",
//         "MMT Black Loyalty Program",
//         "Payment Security",
//         "Privacy Policy",
//         "Cookie Policy",
//         "User Agreement",
//         "Terms of Service",
//         "Franchise Offices",
//         "Make A Payment",
//         "Work From Home",
//         "Escalation Channel",
//       ],
//     },
//   ];

//   return (
//     <footer className="w-full">
//       {/* Main Footer Links */}
//       <div className="bg-gray-100 py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           {footerSections.map((section, index) => (
//             <div key={index} className="mb-6">
//               <h2 className="text-sm font-bold text-gray-900 mb-3">
//                 {section.title}
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 {section.links.map((link, idx) => (
//                   <React.Fragment key={idx}>
//                     <a
//                       href="#"
//                       className="text-sm text-gray-600 hover:text-blue-600"
//                     >
//                       {link}
//                     </a>
//                     {idx < section.links.length - 1 && (
//                       <span className="text-gray-300">,</span>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Q&A Section */}
//       <div className="max-w-7xl mx-auto py-8 px-4 border-b">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {qaData.map((item, index) => (
//             <div key={index} className="pb-6">
//               <h3 className="text-lg font-medium text-gray-900 mb-3">
//                 Q - {item.question}
//               </h3>
//               <p className="text-sm text-gray-600">A: {item.answer}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Social Footer */}
//       <div className="bg-black text-white py-6">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex space-x-6">
//               {/* Social Media Icons */}
//               <a href="#" className="hover:opacity-80">
//                 <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
//                   <img
//                     src="/api/placeholder/24/24"
//                     alt="Instagram"
//                     className="w-6 h-6"
//                   />
//                 </div>
//               </a>
//               <a href="#" className="hover:opacity-80">
//                 <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
//                   <img
//                     src="/api/placeholder/24/24"
//                     alt="Twitter"
//                     className="w-6 h-6"
//                   />
//                 </div>
//               </a>
//               <a href="#" className="hover:opacity-80">
//                 <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
//                   <img
//                     src="/api/placeholder/24/24"
//                     alt="LinkedIn"
//                     className="w-6 h-6"
//                   />
//                 </div>
//               </a>
//               <a href="#" className="hover:opacity-80">
//                 <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
//                   <img
//                     src="/api/placeholder/24/24"
//                     alt="Facebook"
//                     className="w-6 h-6"
//                   />
//                 </div>
//               </a>
//             </div>
//             <div className="text-sm">
//               <p>© 2025 MAKEMYTRIP PVT. LTD.</p>
//               <p className="text-right">
//                 Country <span className="font-medium">India USA UAE</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default About;

import { Facebook, Instagram, InstagramIcon, Linkedin, TwitterIcon } from "lucide-react";
import React from "react";

const About = () => {
  const qaData = [
    {
      question: "How do I make a flight booking on MakeMyTrip?",
      answer:
        "You can book a flight on MakeMyTrip in five easy steps: Head over to the MakeMyTrip flight booking page, Enter your departure and arrival destinations, Select your air travel dates, Choose from our wide range of cheap flights based on your airfare preferences, Click on 'Book Now' and your air flight booking is done. Alternatively, you can also use the MakeMyTrip app for your flight ticket booking. Download the MakeMyTrip app. Put in the details i.e. date of journey, departure and arrival destinations, travel class of your choice, Select on your best comfortable option and click on 'Book Now'.",
    },
    {
      question: "Can I avail domestic flight offers on MakeMyTrip?",
      answer:
        "Of course, you can. While making domestic flight bookings, you can avail any special offer that is active at that time. In accordance with the offer selected, a listing of the cheapest flights would show up on your screen. You can then apply the price filter and click on the downwards arrow, following which budget-friendly flights would start showing up in ascending order from the top (lowest price on top).",
    },
    {
      question: "How can I avail budget air tickets on MakeMyTrip?",
      answer:
        "It's super-easy to avail budget airfare while booking your cheap flight tickets on MakeMyTrip. Just select the 'Price' filter once the available flight options are displayed and adjust according to your convenience. On the MakeMyTrip app, you can select the downward arrow, which will show the lowest airfare at the top and continue downward in ascending order.",
    },
    {
      question:
        "Why could I not avail the flight booking offers at the time of checkout?",
      answer:
        "MakeMyTrip makes use of a world-class real-time reservation database to list airfare and availability. As dynamic changes in airfare take place, or the available flight tickets sell out, the database reflects the changes in real-time. Hence, we suggest, you double-check online flight booking prices when purchasing flight tickets, as the airfare might have been dynamically updated since you first selected the air travel dates or planned your itinerary.",
    },
  ];

//   const footerSections = [
//     {
//       title: "PRODUCT OFFERING",
//       links: [
//         "Flights",
//         "International Flights",
//         "Charter Flights",
//         "Hotels",
//         "International Hotels",
//         "Homestays and Villas",
//         "Activities",
//         "Holidays In India",
//         "International Holidays",
//         "Book Hotels From UAE",
//         "myBiz for Corporate Travel",
//         "Book Online Cabs",
//         "Book Bus Tickets",
//         "Book Train Tickets",
//         "Cheap Tickets to India",
//         "Book Flights From US",
//         "Book Flights From UAE",
//         "Trip Planner",
//         "Gift Cards",
//         "Travel Blog",
//         "PNR Status",
//         "International Travel Guide",
//       ],
//     },
//     {
//       title: "CORPORATE TRAVEL",
//       links: [
//         "Business Travel",
//         "Corporate Travel",
//         "Corporate Travel Management",
//         "Corporate Travel Solution",
//         "Corporate Hotel Booking",
//         "Corporate Flight Booking",
//         "Expense Management",
//         "Corporate Expense Management",
//         "GST on Hotel Rooms",
//         "GST Invoice for Bus",
//         "GST Invoice for Corporate Travel",
//         "myBiz for Small Business",
//         "Free cancellation on International Flights",
//       ],
//     },
//     {
//       title: "ABOUT THE SITE",
//       links: [
//         "Customer Support",
//         "MMT Black Loyalty Program",
//         "Payment Security",
//         "Privacy Policy",
//         "Cookie Policy",
//         "User Agreement",
//         "Terms of Service",
//         "Franchise Offices",
//         "Make A Payment",
//         "Work From Home",
//         "Escalation Channel",
//       ],
//     },
//   ];

const footerSections = [
        {
          title: "MAKEMYTRIP",
          links: [
            "About Us",
            "Investor Relations",
            "Careers",
            "Sustainability",
            "MMT Foundation",
            "Legal Notices",
            "CSR Policy & Committee",
            "myPartner - Travel Agent Portal",
            "List your hotel",
            "Partners- Redbus",
            "Partners- Goibibo",
            "Advertise with Us",
            "Holiday-Franchise",
          ],
        },
        {
          title: "ABOUT THE SITE",
          links: [
            "Customer Support",
            "MMT Black Loyalty Program",
            "Payment Security",
            "Privacy Policy",
            "Cookie Policy",
            "User Agreement",
            "Terms of Service",
            "Franchise Offices",
            "Make A Payment",
            "Work From Home",
            "Escalation Channel",
          ],
        },
        {
          title: "PRODUCT OFFERING",
          links: [
            "Flights",
            "International Flights",
            "Charter Flights",
            "Hotels",
            "International Hotels",
            "Homestays and Villas",
            "Activities",
            "Holidays In India",
            "International Holidays",
            "Book Hotels From UAE",
            "myBiz for Corporate Travel",
            "Book Online Cabs",
            "Book Bus Tickets",
            "Book Train Tickets",
            "Cheap Tickets to India",
            "Book Flights From US",
            "Book Flights From UAE",
            "Trip Planner",
            "Gift Cards",
            "Travel Blog",
            "PNR Status",
            "International Travel Guide",
          ],
        },
        {
          title: "QUICK LINKS",
          links: [
            "Flights Discount Coupons",
            "Domestic Airlines",
            "Indigo Airlines",
            "Air Asia",
            "SpiceJet",
            "GoAir",
            "Air India",
            "Air India Express",
            "Vistara",
            "New Delhi Mumbai Flights",
            "Pune Delhi Flights",
          ],
        },
        {
          title: "IMPORTANT LINKS",
          links: [
            "Cheap Flights",
            "Flight Status",
            "Domestic Airlines",
            "International Airlines",
            "Indian Railways",
            "Trip Ideas",
            "Beaches",
            "Honeymoon Destinations",
            "Romantic Destinations",
          ],
        },
        {
          title: "CORPORATE TRAVEL",
          links: [
            "Business Travel",
            "Corporate Travel",
            "Corporate Travel Management",
            "Corporate Travel Solution",
            "Corporate Hotel Booking",
            "Corporate Flight Booking",
            "Expense Management",
            "Corporate Expense Management",
            "GST on Hotel Rooms",
            "GST Invoice for Bus",
            "GST Invoice for Corporate Travel",
            "myBiz for Small Business",
            "Free cancellation on International Flights",
          ],
        },
        {
          title: "ABOUT THE SITE",
          links: [
            "Customer Support",
            "MMT Black Loyalty Program",
            "Payment Security",
            "Privacy Policy",
            "Cookie Policy",
            "User Agreement",
            "Terms of Service",
            "Franchise Offices",
            "Make A Payment",
            "Work From Home",
            "Escalation Channel",
          ],
        },
      ];
      
        
  return (
    <footer className="w-full">
      {/* Main Footer Links */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {footerSections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-sm font-bold text-gray-900 mb-3">
                {section.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {section.links.map((link, idx) => (
                  <React.Fragment key={idx}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      {link}
                    </a>
                    {idx < section.links.length - 1 && (
                      <span className="text-gray-300">,</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Q&A Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 border-b">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qaData.map((item, index) => (
            <div key={index} className="pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Q - {item.question}
              </h3>
              <p className="text-sm text-gray-600">A: {item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Footer */}
      <div className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              <a href="#" className="hover:opacity-80">
                <div className=" rounded-lg flex items-center justify-center">
                        <InstagramIcon className="w-12 h-12" />
                  
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className=" rounded-lg flex items-center justify-center">
                  <TwitterIcon className="w-12 h-12" />
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="rounded-lg flex items-center justify-center">
                  <Linkedin className="w-12 h-12" />
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="rounded-lg flex items-center justify-center">
                  <Facebook className="w-12 h-12" />
                </div>
              </a>
            </div>
            <div className="text-sm">
              <p>© 2025 MAKEMYTRIP PVT. LTD.</p>
              <p className="text-right">
                Country <span className="font-medium">India USA UAE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default About;
