import type { FC } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import type { JSX } from "react/jsx-runtime";

interface StatCardProps {
  icon: JSX.Element;
  value: number;
  description: string;
  suffix?: string;
  accentColor?: string;
}

const StatCard: FC<StatCardProps> = ({
  icon,
  value,
  description,
  suffix = "",
  accentColor = "bg-blue-500",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`
        group relative overflow-hidden rounded-2xl bg-white/90 p-8 shadow-lg
        backdrop-blur-sm transition-all duration-500 hover:shadow-xl dark:bg-gray-800/90
        ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
    >
      <div
        className={`
        absolute -right-12 -top-12 size-40 rounded-full ${accentColor} opacity-10 
        transition-transform duration-700 ease-out group-hover:scale-150
      `}
      />

      <div
        className={`relative mb-6 inline-flex items-center justify-center rounded-full p-4 transition-all duration-500 ease-out group-hover:scale-110`}
        style={{
          backgroundColor: `${accentColor}33`, // hex color + opacity (33 = 20% opacity)
        }}
      >
        <div className="text-2xl text-blue-600 dark:text-blue-400">{icon}</div>
      </div>

      <div className="relative mb-3">
        <h3
          className={`
          text-5xl font-bold tracking-tight text-gray-900 transition-all
          duration-500 ease-out group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400
        `}
        >
          {inView ? (
            <>
              <CountUp
                start={0}
                end={value}
                duration={2.5}
                separator=","
                useEasing={true}
                enableScrollSpy
              />
              {suffix}
            </>
          ) : (
            0
          )}
        </h3>
        <div
          className={`
          mt-2 h-1 w-0 rounded-full ${accentColor}
          transition-all duration-1000 ease-out
          ${inView ? "w-16" : "w-0"}
        `}
        />
      </div>
      <p className="relative text-base text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default StatCard;
