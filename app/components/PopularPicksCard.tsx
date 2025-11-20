

import Image from "next/image";
import React from "react";

interface PopularPicksCardProps {
  imageUrl: string;
  title: string;
  alt?: string;
}

const PopularPicksCard: React.FC<PopularPicksCardProps> = ({ imageUrl, title, alt }) => {
  return (
    <div
      className="
        w-40 sm:w-44 md:w-48 lg:w-52 
        bg-white rounded-xl shadow-md overflow-hidden
        flex flex-col
      "
    >
      {/* Image Section */}
      <div className=" relative w-full aspect-[17/16]">
        <Image
          src={imageUrl}
          alt={alt || "card image"}
          fill
          className=" object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-2 text-center text-sm font-medium">
        {title}
      </div>
    </div>
  );
};

export default PopularPicksCard;
