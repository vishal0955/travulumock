import Image from "next/image";
import { FilledStar } from "./HotelCards/FilledStar";
import { EmptyStar } from "./HotelCards/EmptyStar";
import { Butcherman } from "next/font/google";
import Button from "./Button";
type Amenity = {
  name: string;
};

type Images = {
  url: string;
  alt?: string;
};

interface HotelCardProps {
  id?: string;
  name: string;
  imageUrl?: Images[];
  amenities?: Amenity[];
  location: string;
  rating?: number;
  pricePerNight: number;
  priceSubtitle?: string;
    totalPrice?: number;
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  name,
  imageUrl,
  amenities,
  location,
  rating,
  
  pricePerNight,
  priceSubtitle,
  totalPrice
}) => {
 const remark = rating && rating > 4 ? "Excellent" : "Good";
  return (
    <div className="flex flex-col rounded-xl bg-[#FFFFFF] shadow-sm p-3 gap-2 border-[E5E7EB] border-rounded-xl">
      <div className="flex flex-col gap-2 w-full">
        <div className="w-full h-41 md:h-48 lg:h-52 rounded-xl px-4.5 py-18.5 overflow-hidden gap-2 ">
          <Image
            src={imageUrl?.[0]?.url || ""}
            alt={name}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <p className="font-nunito text-lg leading-1.5 font-bold"> {name}</p>
            <p className="font-nunito text-sm  leading-1.25">{location}</p>
            </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) =>
                index < (rating ?? 0) ? (
                  <FilledStar key={index} />
                ) : (
                  <EmptyStar key={index} />
                )
              )}
            </div>
            <div className="flex  items-center gap-2">
              <span className="font-nunito text-lg font-bold">
                ${remark}
              </span>
                <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">
              {rating}
            </span>
            </div>
          </div>

           <div className="grid grid-cols-2 gap-y-2">
          
            {amenities?.slice(0, 4).map((amenity, i) => (
                 <div className="flex items-center gap-2" key={i}>
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91869 6.71136L1.17719 4.0464L0 5.19072L3.91869 9L12 1.14432L10.8228 0L3.91869 6.71136Z" fill="black"/>
</svg>

            <span className="text-sm text-black">{amenity.name}</span>
          </div>
            ))}
      
        </div>
        </div>

        <div className="flex justify-between items-end border-t pt-3">
        <div>
          <p className="text-sm">{pricePerNight}</p>
          <p className="text-lg font-bold opacity-80">{totalPrice}</p>
          <p className="text-xs text-gray-500">Includes taxes & fees</p>
        </div>

        <Button
          label={"Select"}
          onClick={() =>{
            console.log(`Hotel selected`);
          }}
          
          />
        
      </div>

       

      </div>;
    </div>
  );
};                      
export default HotelCard;
