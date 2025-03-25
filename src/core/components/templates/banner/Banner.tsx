import { GlobeWithMatrix } from "../../moleculas/globe";
import { MyLogoCarousel } from "../../moleculas/carousel";
import MainServices from "../services/MainServices.tsx";

const Banner = () => {
  return (
    <div
      className={"relative min-h-[1000px] overflow-hidden bg-black text-white"}
    >
      <div className={"absolute inset-0"}>
        <GlobeWithMatrix />
      </div>
      <main className={"flex min-h-[1000px] flex-col backdrop-blur-[1px]"}>
        <MainServices />
        <div
          className={
            "shrink-1 flex min-h-[800px] flex-col-reverse items-center justify-between pb-20 transition-all duration-300 xl:flex-row"
          }
        >
          <div className={"w-full p-5 pt-16 xl:w-1/2"}>
            <div
              className={"mx-auto w-[90%] text-center xl:w-2/3 xl:text-start"}
            >
              <h2 className={"mb-7 text-3xl xl:text-5xl"}>
                What is Lorem Ipsum?
              </h2>
              <p className={"text-sm sm:text-lg"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className={"w-full pt-16 xl:w-1/2"}>
            <div className={"mx-auto w-full"}>
              <MyLogoCarousel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
