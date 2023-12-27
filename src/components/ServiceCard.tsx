import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  imgUrl: string;
  heading: string;
  desc: string;
}

function ServiceCard({ imgUrl, heading, desc }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-4 border-2 rounded-lg w-[20rem] p-4 shadow-md">
      <Image
        src={imgUrl}
        alt="service card image"
        width={"100"}
        height={"100"}
        className="flex-start"
      />
      <h2 className="font-bold text-2xl">{heading}</h2>
      <p className="text-[grey] text-xl">{desc}</p>
    </div>
  );
}

export default ServiceCard;
