export interface ServiceCardProps {
  title: string;
  src: string;
}

const ServiceCard = ({ src, title }: ServiceCardProps) => {
  return (
    <div
      className={
        "animate__animated animate__fadeInUp flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 py-8 shadow transition-colors duration-300 hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
      }
    >
      <img
        src={src}
        alt={""}
        width={50}
        height={50}
        className={"w-10  lg:w-12"}
      />{" "}
      <h4 className={"text-lg font-bold uppercase"}>{title}</h4>
    </div>
  );
};

export default ServiceCard;
