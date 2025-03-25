import { ServiceCardProps } from "./ServiceCard.tsx";

const MainServiceCard = ({ src, title }: ServiceCardProps) => {
  return (
    <div
      className={
        "animate__animated animate__fadeIn flex items-center   gap-2 rounded-2xl border border-gray-200/30 p-2 transition-colors duration-300 hover:bg-white/10 lg:p-4"
      }
    >
      <img
        src={src}
        alt={""}
        width={40}
        height={40}
        className={"w-8  invert lg:w-8"}
      />{" "}
      <h4 className={" text-xs font-bold uppercase md:text-sm"}>{title}</h4>
    </div>
  );
};

export default MainServiceCard;
