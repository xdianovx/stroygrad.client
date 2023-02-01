import s from "./TeamCard.module.scss";

import classNames from "classnames";
import Image from "next/image";

export interface iTeamCard {
  data: {
    name: string;
    position: string;
    image: string;
  };
  className?: string | string[];
}

export const TeamCard = ({ data, className }: iTeamCard) => {
  return (
    <div className="">
      <div className="relative h-[800px]">
        <Image src={data.image} fill className="block" alt={data.name} />
      </div>

      <div className="flex justify-between items-end mt-[60px]">
        <h2 className="text-[56px] leading-[68px] max-w-[450px] w-full">
          {data.name}
        </h2>
        <span className="leading-none">/</span>
        <p>{data.position}</p>
      </div>
    </div>
  );
};
