"use client"
import React from "react";
import PillButton from "./PillButton";
import Image from "next/image";
import Button from "./Button";


interface FlightCardProps {
  id?: string;
  airline?: string;
  logoUrl?: string;
  flightNumber: string;
  placeFrom: string;
  placeTo: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
    priceSubtitle?: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  id,
  airline,
  logoUrl,
  flightNumber,
  placeFrom,
  placeTo,
  departureTime,
  arrivalTime,
  duration,
  price,
    priceSubtitle = "per person",
}) => {

    const HandleButtonClick = () => {
        console.log(`Button clicked `);
    };

  return (
    <div
      className="flex flex-col rounded-xl bg-[#FFFFFF] shadow-sm p-3 gap-2 border-[E5E7EB] border-rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={logoUrl}
            alt="Airline Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{airline}</span>
            <span className="text-xs text-gray-500">{flightNumber}</span>
          </div>
        </div>
        <PillButton text={`Non-Stop `} />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg">{departureTime}</span>
          <span className="text-sm text-gray-500">{placeFrom}</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="inline-block w-16 h-1">
            <hr className="border-t-2 border-dashed border-gray-300 w-full" />
            {/* <Image
              src="/airindia-logo.png"
              alt="Plane Icon"
              width={16}
              height={16}
              className="absolute left-1/2 pt-1 bg-white"
            /> */}
            <hr className="border-t-2 border-dashed border-gray-300 w-full" />
          </span>
          <span className="font-bold text-lg">{duration}</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-bold text-lg">{arrivalTime}</span>
          <span className="text-sm text-gray-500">{placeTo}</span>
        </div>
      </div>


      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-lg font-bold text-gray-900">{price}</p>
          <p className="text-xs text-gray-500">{priceSubtitle}</p>
        </div>
        
       <Button label="Select " onClick={HandleButtonClick} />
      </div>
    </div>
  );
};

export default FlightCard;



// "use client";
// import Image from "next/image";

// export type FlightCardProps = {
//   logo: string; // airline logo
//   airline: string;
//   flightCode: string;
//   tag?: string; // e.g. Non-stop
//   tagBg?: string;
//   tagColor?: string;

//   departureTime: string;
//   departureCode: string;

//   arrivalTime: string;
//   arrivalCode: string;

//   duration: string; // e.g. "8h 15m"
//   price: string;
//   priceSubtitle?: string;

//   onSelect?: () => void;
// };

// const FlightCard: React.FC<FlightCardProps> = ({
//   logo,
//   airline,
//   flightCode,
//   tag = "Non-stop",
//   tagBg = "bg-green-100",
//   tagColor = "text-green-700",

//   departureTime,
//   departureCode,

//   arrivalTime,
//   arrivalCode,

//   duration,
//   price,
//   priceSubtitle = "per person",

//   onSelect,
// }) => {
//   return (
//     <div className="w-full max-w-xs bg-white border border-gray-200 shadow-md rounded-xl p-4 flex flex-col gap-4">
      
//       {/* Top Section */}
//       <div className="flex items-center justify-between relative">
//         <div className="flex items-center gap-3">
//           {/* Logo */}
//           <div className="w-10 h-10 bg-white rounded-md flex justify-center items-center">
//             <Image
//               src={logo}
//               alt={airline}
//               width={40}
//               height={40}
//               className="rounded-md"
//             />
//           </div>

//           {/* Airline Name + Code */}
//           <div>
//             <p className="font-semibold text-gray-900 text-sm">{airline}</p>
//             <p className="text-gray-500 text-xs">{flightCode}</p>
//           </div>
//         </div>

//         {/* Tag */}
//         <div
//           className={`px-3 py-1 rounded-full text-xs font-medium ${tagBg} ${tagColor}`}
//         >
//           {tag}
//         </div>
//       </div>

//       {/* Time Section */}
//       <div className="flex justify-between items-center">
        
//         {/* Departure */}
//         <div className="text-center">
//           <p className="text-lg font-bold text-gray-900">{departureTime}</p>
//           <p className="text-sm text-gray-500">{departureCode}</p>
//         </div>

//         {/* Middle Route Line */}
//         <div className="flex flex-col items-center">
//           <div className="relative w-24">
//             <div className="h-[2px] bg-gray-300 w-full"></div>
//             <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2">
//               <svg width="18" height="16" viewBox="0 0 24 24" className="text-gray-400">
//                 <path
//                   fill="currentColor"
//                   d="M2 16h20l-8-9v-5l-4 3v2l-8 9z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <p className="text-xs text-gray-500">{duration}</p>
//         </div>

//         {/* Arrival */}
//         <div className="text-center">
//           <p className="text-lg font-bold text-gray-900">{arrivalTime}</p>
//           <p className="text-sm text-gray-500">{arrivalCode}</p>
//         </div>
//       </div>

//       {/* Price + CTA */}
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="text-lg font-bold text-gray-900">{price}</p>
//           <p className="text-xs text-gray-500">{priceSubtitle}</p>
//         </div>

//         <button
//           onClick={onSelect}
//           className="bg-gradient-to-t from-[#F25C54] to-[#FF914D] text-white font-bold px-4 py-2 rounded-md text-sm"
//         >
//           Select
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FlightCard;
