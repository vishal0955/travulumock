import ArloAI from "./components/ArloAI";
import MenuBar from "./components/Menubar";
import Image from "next/image";
import PopularPicksCard from "./components/PopularPicksCard";
import FlightCard from "./components/FlightCard";



export default function Home() {
  const popularPicks = [
    {
      imageUrl: "/bali.png",
      title: "Bali",
      alt: "Bali Image",
    },
    {
      imageUrl: "/switzerland.png",
      title: "Switzerland",
      alt: "Switzerland Image",
    },
    {
      imageUrl: "/paris.png",
      title: "Paris",
      alt: "Paris Image",
    },
  ];

  const FlightDetails = [
    {
   
      airline: "Air India",
     logoUrl: "/airindia-logo.png",
     flightCode: "AI123",
     departureCode: "DEL",
     arrivalCode: "BOM",
      flightNumber: "AI123",
      placeFrom: "Delhi",
      placeTo: "Mumbai",
      departureTime: "10:00 AM",
      arrivalTime: "12:00 PM",
      duration: "2h",
      price: 5000,
      tag: "Non-Stop",
    },
  ];
  return (
    <>
      <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black md:max-w-9/12 mx-auto">
        <MenuBar />

        <div className=" p-4 md:p-6 lg:p-10 relative">
          <ArloAI />
        </div>

        <div className="flex-2 pt-4.5 md:pt-6 lg:pt-10 rounded-tl-xl rounded-tr-xl  border-[#E5E7EB]  " >
          <div className="relative w-full h-[443px] rounded-2xl ">
            <Image src="/map.png" alt="Banner" sizes="100vw"  fill className="object-cover" />
          </div>

          <div className=" flex flex-col gap-2.5 p-3">
            <div>
              <h3 className="font-bold">Popular Picks from Delhi</h3>
              <div className="grid grid-cols-4 gap-2 ml-auto">
                {popularPicks.map((pick, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <PopularPicksCard key={index} {...pick} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            {FlightDetails.map((flight,index) => (
              
              <FlightCard key={index} {...flight} />
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
