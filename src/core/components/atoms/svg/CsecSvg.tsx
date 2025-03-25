import { useEffect, useRef } from "react";
import LogoContainer from "./LogoContainer.tsx";

const CsecSvg = () => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElement = ref.current;
    if (svgElement) {
      const dots = svgElement.querySelectorAll("circle");

      dots.forEach((dot) => {
        const delay = Math.random() * 2; // Random delay between 0-5s
        dot.style.animationDelay = `${delay}s`;
      });
    }
  }, [ref]);

  return (
    <LogoContainer
      ref={ref}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 890 750"
      id="elektrobild"
    >
      <g id="dots">
        <g id="row 1">
          <circle
            id="dot_36"
            cx="355"
            cy="45"
            r="5"
            style={{ fill: "#2275b9" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="45"
            r="5"
            style={{ fill: "#f9faf5" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="55"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="55"
            r="5"
            style={{ fill: "#2575bc" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="65"
            r="5"
            style={{ fill: "#1c78b9" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="65"
            r="5"
            style={{ fill: "#2476bf" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="65"
            r="5"
            style={{ fill: "#2174ba" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="75"
            r="5"
            style={{ fill: "#def6ff" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="85"
            r="5"
            style={{ fill: "#3776a9" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="85"
            r="5"
            style={{ fill: "#1162a3" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="85"
            r="5"
            style={{ fill: "#e9fcff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="95"
            r="5"
            style={{ fill: "#eafeff" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="95"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="95"
            r="5"
            style={{ fill: "#1c78bb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="95"
            r="5"
            style={{ fill: "#2872af" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="95"
            r="5"
            style={{ fill: "#fdfef9" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="95"
            r="5"
            style={{ fill: "#2474b9" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="105"
            r="5"
            style={{ fill: "#daf5ff" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="105"
            r="5"
            style={{ fill: "#1b78be" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="105"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="105"
            r="5"
            style={{ fill: "#2373b0" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="105"
            r="5"
            style={{ fill: "#2074bd" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="105"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="115"
            r="5"
            style={{ fill: "#daf5ff" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="115"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="115"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="115"
            r="5"
            style={{ fill: "#2275b7" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="115"
            r="5"
            style={{ fill: "#2075b8" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="115"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="115"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="115"
            r="5"
            style={{ fill: "#fdfcf8" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="125"
            r="5"
            style={{ fill: "#dcf3ff" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="125"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="125"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="125"
            r="5"
            style={{ fill: "#1c72bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="125"
            r="5"
            style={{ fill: "#1f74b5" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="125"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="125"
            r="5"
            style={{ fill: "#2276bc" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="135"
            r="5"
            style={{ fill: "#2477bb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="135"
            r="5"
            style={{ fill: "#1d76b8" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="135"
            r="5"
            style={{ fill: "#a6d0e9" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="135"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="135"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="135"
            r="5"
            style={{ fill: "#1f78bc" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="135"
            r="5"
            style={{ fill: "#4388bf" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="145"
            r="5"
            style={{ fill: "#fcfdff" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="145"
            r="5"
            style={{ fill: "#24669a" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="145"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="145"
            r="5"
            style={{ fill: "#2275b7" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="145"
            r="5"
            style={{ fill: "#f6fcfc" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="145"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="145"
            r="5"
            style={{ fill: "#65a3d2" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="145"
            r="5"
            style={{ fill: "#fdfef9" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="155"
            r="5"
            style={{ fill: "#1e7cbc" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="155"
            r="5"
            style={{ fill: "#b1daf0" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="155"
            r="5"
            style={{ fill: "#c3e5ff" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="155"
            r="5"
            style={{ fill: "#267dc2" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="155"
            r="5"
            style={{ fill: "#2575b4" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="155"
            r="5"
            style={{ fill: "#2275b7" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="155"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="155"
            r="5"
            style={{ fill: "#4c81ad" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="155"
            r="5"
            style={{ fill: "#407fb2" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="155"
            r="5"
            style={{ fill: "#4380ad" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="155"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="155"
            r="5"
            style={{ fill: "#217abe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="165"
            r="5"
            style={{ fill: "#2179c3" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="165"
            r="5"
            style={{ fill: "#2077be" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="165"
            r="5"
            style={{ fill: "#1b79bf" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="165"
            r="5"
            style={{ fill: "#2276b6" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="165"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="165"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="165"
            r="5"
            style={{ fill: "#1e79c0" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="165"
            r="5"
            style={{ fill: "#1b7abe" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="165"
            r="5"
            style={{ fill: "#2077be" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="165"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="165"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="165"
            r="5"
            style={{ fill: "#2474bb" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="165"
            r="5"
            style={{ fill: "#1d75bc" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="165"
            r="5"
            style={{ fill: "#fbfcfe" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="175"
            r="5"
            style={{ fill: "#e4fbff" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="175"
            r="5"
            style={{ fill: "#2077be" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="175"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="175"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="175"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="175"
            r="5"
            style={{ fill: "#1c6eaa" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="175"
            r="5"
            style={{ fill: "#4386bb" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="175"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="175"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="175"
            r="5"
            style={{ fill: "#1b76bc" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="185"
            r="5"
            style={{ fill: "#eafdff" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="185"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="185"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="185"
            r="5"
            style={{ fill: "#2077bc" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="185"
            r="5"
            style={{ fill: "#7aa2c6" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="185"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="185"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="185"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="185"
            r="5"
            style={{ fill: "#1c74bc" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="185"
            r="5"
            style={{ fill: "#2074bc" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="185"
            r="5"
            style={{ fill: "#fdfbfc" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="185"
            r="5"
            style={{ fill: "#4087bf" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="185"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="185"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="185"
            r="5"
            style={{ fill: "#b3dcf8" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="185"
            r="5"
            style={{ fill: "#2276b6" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="185"
            r="5"
            style={{ fill: "#fbfdfa" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="195"
            r="5"
            style={{ fill: "#e6f9ff" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="195"
            r="5"
            style={{ fill: "#1c77be" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="195"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="195"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="195"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="195"
            r="5"
            style={{ fill: "#2574b6" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="195"
            r="5"
            style={{ fill: "#7aa8ca" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="195"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="195"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="195"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="195"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="195"
            r="5"
            style={{ fill: "#1f78bc" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="195"
            r="5"
            style={{ fill: "#fefeff" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="195"
            r="5"
            style={{ fill: "#4186bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="195"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="195"
            r="5"
            style={{ fill: "#1a77ba" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="195"
            r="5"
            style={{ fill: "#1f71bb" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="195"
            r="5"
            style={{ fill: "#1c73ba" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="195"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="205"
            r="5"
            style={{ fill: "#e7faff" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="205"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="205"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="205"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="205"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="205"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="205"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="205"
            r="5"
            style={{ fill: "#7aa8ca" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="205"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="205"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="205"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="205"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="205"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="205"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="205"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="205"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="205"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="205"
            r="5"
            style={{ fill: "#1e76be" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="205"
            r="5"
            style={{ fill: "#1d7ac7" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="215"
            r="5"
            style={{ fill: "#ebfeff" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="215"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="215"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="215"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="215"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="215"
            r="5"
            style={{ fill: "#7ba7ca" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="215"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="215"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="215"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="215"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="215"
            r="5"
            style={{ fill: "#2275b7" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="215"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="215"
            r="5"
            style={{ fill: "#1f78bc" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="225"
            r="5"
            style={{ fill: "#e1f8ff" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="225"
            r="5"
            style={{ fill: "#1873ba" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="225"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="225"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="225"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="225"
            r="5"
            style={{ fill: "#7ba7ca" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="225"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="225"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="225"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="225"
            r="5"
            style={{ fill: "#2077be" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="225"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="225"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="225"
            r="5"
            style={{ fill: "#2077bc" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="225"
            r="5"
            style={{ fill: "#fdfbfe" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="225"
            r="5"
            style={{ fill: "#1f77c1" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="225"
            r="5"
            style={{ fill: "#fbfdfa" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="235"
            r="5"
            style={{ fill: "#e2f9ff" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="235"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="235"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="235"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="235"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="235"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="235"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="235"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="235"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="235"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="235"
            r="5"
            style={{ fill: "#7ba8c7" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="235"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="235"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="235"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="235"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="235"
            r="5"
            style={{ fill: "#1f77b7" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="235"
            r="5"
            style={{ fill: "#1b79c3" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="235"
            r="5"
            style={{ fill: "#4485bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="235"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="235"
            r="5"
            style={{ fill: "#1e77b9" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="235"
            r="5"
            style={{ fill: "#d8feff" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="235"
            r="5"
            style={{ fill: "#1c79be" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="235"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="235"
            r="5"
            style={{ fill: "#ddf6ff" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="235"
            r="5"
            style={{ fill: "#1f75be" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="235"
            r="5"
            style={{ fill: "#1d75bc" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="245"
            r="5"
            style={{ fill: "#e1f8ff" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="245"
            r="5"
            style={{ fill: "#2376ba" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="245"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="245"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="245"
            r="5"
            style={{ fill: "#4083ba" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="245"
            r="5"
            style={{ fill: "#f9feff" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="245"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="245"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="245"
            r="5"
            style={{ fill: "#fefcff" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="245"
            r="5"
            style={{ fill: "#669ecf" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="245"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="245"
            r="5"
            style={{ fill: "#2179c3" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="245"
            r="5"
            style={{ fill: "#2d77b4" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="245"
            r="5"
            style={{ fill: "#2176b7" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="245"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="245"
            r="5"
            style={{ fill: "#1773bc" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="245"
            r="5"
            style={{ fill: "#f3f8fc" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="255"
            r="5"
            style={{ fill: "#dcf7ff" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="255"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="255"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="255"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="255"
            r="5"
            style={{ fill: "#fefeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="255"
            r="5"
            style={{ fill: "#2074ba" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="255"
            r="5"
            style={{ fill: "#1b72b7" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="255"
            r="5"
            style={{ fill: "#1b72b5" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="255"
            r="5"
            style={{ fill: "#186fb4" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="255"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="255"
            r="5"
            style={{ fill: "#1975be" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="255"
            r="5"
            style={{ fill: "#1875ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="255"
            r="5"
            style={{ fill: "#1c74bb" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="255"
            r="5"
            style={{ fill: "#1c73b8" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="255"
            r="5"
            style={{ fill: "#2176b7" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="255"
            r="5"
            style={{ fill: "#2473b5" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="255"
            r="5"
            style={{ fill: "#2972b6" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="255"
            r="5"
            style={{ fill: "#1b77c0" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="255"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="255"
            r="5"
            style={{ fill: "#1c78b9" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="255"
            r="5"
            style={{ fill: "#2275b9" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="265"
            r="5"
            style={{ fill: "#e4faff" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="265"
            r="5"
            style={{ fill: "#1c77be" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="265"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="265"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="265"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="265"
            r="5"
            style={{ fill: "#fefeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="265"
            r="5"
            style={{ fill: "#2879bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="265"
            r="5"
            style={{ fill: "#2879ba" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="265"
            r="5"
            style={{ fill: "#2c76b3" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="265"
            r="5"
            style={{ fill: "#2275b7" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="265"
            r="5"
            style={{ fill: "#2175bd" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="265"
            r="5"
            style={{ fill: "#2478b6" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="265"
            r="5"
            style={{ fill: "#538ab3" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="265"
            r="5"
            style={{ fill: "#2879ba" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="265"
            r="5"
            style={{ fill: "#2477b9" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="265"
            r="5"
            style={{ fill: "#2978ba" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="265"
            r="5"
            style={{ fill: "#2678b4" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="265"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="265"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="265"
            r="5"
            style={{ fill: "#1b73b2" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="265"
            r="5"
            style={{ fill: "#5792ba" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="265"
            r="5"
            style={{ fill: "#3077af" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="265"
            r="5"
            style={{ fill: "#f3fbfe" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="275"
            r="5"
            style={{ fill: "#d2edff" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="275"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="275"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="275"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="275"
            r="5"
            style={{ fill: "#fdfcf8" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="275"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="275"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="275"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="275"
            r="5"
            style={{ fill: "#d7f8ff" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="275"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="275"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="275"
            r="5"
            style={{ fill: "#1e76be" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="275"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="275"
            r="5"
            style={{ fill: "#2178bf" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="275"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="275"
            r="5"
            style={{ fill: "#1e75c2" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="275"
            r="5"
            style={{ fill: "#93c1e2" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="275"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="275"
            r="5"
            style={{ fill: "#f7fdfd" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="285"
            r="5"
            style={{ fill: "#e0f3ff" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="285"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="285"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="285"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="285"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="285"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="285"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="285"
            r="5"
            style={{ fill: "#7aa6cb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="285"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="285"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="285"
            r="5"
            style={{ fill: "#1d72b5" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="285"
            r="5"
            style={{ fill: "#2778b0" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="285"
            r="5"
            style={{ fill: "#1d76ba" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="285"
            r="5"
            style={{ fill: "#5a8eb6" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="285"
            r="5"
            style={{ fill: "#2275b7" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="285"
            r="5"
            style={{ fill: "#1f75be" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="285"
            r="5"
            style={{ fill: "#2f76b4" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="285"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="285"
            r="5"
            style={{ fill: "#1d7ac0" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="285"
            r="5"
            style={{ fill: "#74a1c8" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="285"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="285"
            r="5"
            style={{ fill: "#1e74bd" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="285"
            r="5"
            style={{ fill: "#649ac9" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="285"
            r="5"
            style={{ fill: "#f6fbff" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="295"
            r="5"
            style={{ fill: "#1d79ba" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="295"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="295"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="295"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="295"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="295"
            r="5"
            style={{ fill: "#fefeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="295"
            r="5"
            style={{ fill: "#2276be" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="295"
            r="5"
            style={{ fill: "#79a7cb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="295"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="295"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="295"
            r="5"
            style={{ fill: "#3178ae" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="295"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="295"
            r="5"
            style={{ fill: "#2574b9" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="295"
            r="5"
            style={{ fill: "#dff3fe" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="295"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="295"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="295"
            r="5"
            style={{ fill: "#2d78b2" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="295"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="295"
            r="5"
            style={{ fill: "#1d70b4" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="295"
            r="5"
            style={{ fill: "#1a71b8" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="295"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="295"
            r="5"
            style={{ fill: "#2176b7" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="295"
            r="5"
            style={{ fill: "#f9feff" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="295"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="295"
            r="5"
            style={{ fill: "#f4fdfa" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="305"
            r="5"
            style={{ fill: "#d2eeff" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="305"
            r="5"
            style={{ fill: "#2077be" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="305"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="305"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="305"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="305"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="305"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="305"
            r="5"
            style={{ fill: "#79a7cb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="305"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="305"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="305"
            r="5"
            style={{ fill: "#387bb2" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="305"
            r="5"
            style={{ fill: "#1e75bc" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="305"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="305"
            r="5"
            style={{ fill: "#dcf3ff" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="305"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="305"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="305"
            r="5"
            style={{ fill: "#2d78b2" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="305"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="305"
            r="5"
            style={{ fill: "#1972b6" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="305"
            r="5"
            style={{ fill: "#1c71b4" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="305"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="305"
            r="5"
            style={{ fill: "#1f77b7" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="305"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="305"
            r="5"
            style={{ fill: "#1b77c2" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="305"
            r="5"
            style={{ fill: "#f9feff" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="315"
            r="5"
            style={{ fill: "#d5eeff" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="315"
            r="5"
            style={{ fill: "#2378bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="315"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="315"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="315"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="315"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="315"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="315"
            r="5"
            style={{ fill: "#79a7cb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="315"
            r="5"
            style={{ fill: "#2277ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="315"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="315"
            r="5"
            style={{ fill: "#377ab1" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="315"
            r="5"
            style={{ fill: "#1e75bc" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="315"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="315"
            r="5"
            style={{ fill: "#dcf3ff" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="315"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="315"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="315"
            r="5"
            style={{ fill: "#2d78b2" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="315"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="315"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="315"
            r="5"
            style={{ fill: "#1a73b7" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="315"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="315"
            r="5"
            style={{ fill: "#1c71b4" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="315"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="315"
            r="5"
            style={{ fill: "#1f77b7" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="315"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="315"
            r="5"
            style={{ fill: "#1e76be" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="315"
            r="5"
            style={{ fill: "#246fb0" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="325"
            r="5"
            style={{ fill: "#b2d7f4" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="325"
            r="5"
            style={{ fill: "#237abd" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="325"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="325"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="325"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="325"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="325"
            r="5"
            style={{ fill: "#79a7cb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="325"
            r="5"
            style={{ fill: "#2376bc" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="325"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="325"
            r="5"
            style={{ fill: "#1a6baa" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="325"
            r="5"
            style={{ fill: "#1d70b2" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="325"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="325"
            r="5"
            style={{ fill: "#1b77b8" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="325"
            r="5"
            style={{ fill: "#dff5ff" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="325"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="325"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="325"
            r="5"
            style={{ fill: "#2d78b2" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="325"
            r="5"
            style={{ fill: "#1673b8" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="325"
            r="5"
            style={{ fill: "#fcfefb" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="325"
            r="5"
            style={{ fill: "#1d72b2" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="325"
            r="5"
            style={{ fill: "#1c78bb" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="325"
            r="5"
            style={{ fill: "#1e76c0" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="325"
            r="5"
            style={{ fill: "#e3feff" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="325"
            r="5"
            style={{ fill: "#1d78bf" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="325"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="325"
            r="5"
            style={{ fill: "#256fac" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="325"
            r="5"
            style={{ fill: "#f4f8ff" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="335"
            r="5"
            style={{ fill: "#b4d5f6" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="335"
            r="5"
            style={{ fill: "#2079bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="335"
            r="5"
            style={{ fill: "#2175bd" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="335"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="335"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="335"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="335"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="335"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="335"
            r="5"
            style={{ fill: "#75a3c5" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="335"
            r="5"
            style={{ fill: "#fcfefb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="335"
            r="5"
            style={{ fill: "#2174b8" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="335"
            r="5"
            style={{ fill: "#1a78c0" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="335"
            r="5"
            style={{ fill: "#1a75be" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="335"
            r="5"
            style={{ fill: "#247bbe" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="335"
            r="5"
            style={{ fill: "#558bb7" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="335"
            r="5"
            style={{ fill: "#1a6bac" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="335"
            r="5"
            style={{ fill: "#1a79bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="335"
            r="5"
            style={{ fill: "#2078bf" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="335"
            r="5"
            style={{ fill: "#2d78b2" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="335"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="335"
            r="5"
            style={{ fill: "#1d74b9" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="335"
            r="5"
            style={{ fill: "#247cc3" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="335"
            r="5"
            style={{ fill: "#fefefc" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="335"
            r="5"
            style={{ fill: "#f1fbfd" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="335"
            r="5"
            style={{ fill: "#1d76b8" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="335"
            r="5"
            style={{ fill: "#336d9b" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="335"
            r="5"
            style={{ fill: "#226eaa" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="335"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="335"
            r="5"
            style={{ fill: "#237abf" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="335"
            r="5"
            style={{ fill: "#256ba6" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="335"
            r="5"
            style={{ fill: "#1870ba" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="335"
            r="5"
            style={{ fill: "#f6fdff" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="345"
            r="5"
            style={{ fill: "#b1d5f5" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="345"
            r="5"
            style={{ fill: "#2178bd" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="345"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="345"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="345"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="345"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="345"
            r="5"
            style={{ fill: "#3e81b6" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="345"
            r="5"
            style={{ fill: "#fbfcff" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="345"
            r="5"
            style={{ fill: "#12639b" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="345"
            r="5"
            style={{ fill: "#75a9ce" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="345"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="345"
            r="5"
            style={{ fill: "#2672ac" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="345"
            r="5"
            style={{ fill: "#1b78be" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="345"
            r="5"
            style={{ fill: "#1e74bd" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="345"
            r="5"
            style={{ fill: "#166ab0" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="345"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="345"
            r="5"
            style={{ fill: "#7cb0d7" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="345"
            r="5"
            style={{ fill: "#277abc" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="345"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="345"
            r="5"
            style={{ fill: "#116cb3" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="345"
            r="5"
            style={{ fill: "#2074bc" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="345"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="355"
            r="5"
            style={{ fill: "#abd3ec" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="355"
            r="5"
            style={{ fill: "#1c78bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="355"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="355"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="355"
            r="5"
            style={{ fill: "#2077bc" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="355"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="355"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="355"
            r="5"
            style={{ fill: "#2276bc" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="355"
            r="5"
            style={{ fill: "#1b78bd" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="355"
            r="5"
            style={{ fill: "#1e76c0" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="355"
            r="5"
            style={{ fill: "#1878c2" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="355"
            r="5"
            style={{ fill: "#2675b7" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="355"
            r="5"
            style={{ fill: "#2277b8" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="355"
            r="5"
            style={{ fill: "#1e79bf" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="355"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="355"
            r="5"
            style={{ fill: "#2176b7" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="355"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="355"
            r="5"
            style={{ fill: "#1e76be" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="355"
            r="5"
            style={{ fill: "#2376b8" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="355"
            r="5"
            style={{ fill: "#1b77c2" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="355"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="355"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="355"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="355"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="355"
            r="5"
            style={{ fill: "#1c75b9" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="355"
            r="5"
            style={{ fill: "#1d78bf" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="355"
            r="5"
            style={{ fill: "#1d78c1" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="355"
            r="5"
            style={{ fill: "#2077bc" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="355"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="355"
            r="5"
            style={{ fill: "#1c78bb" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="355"
            r="5"
            style={{ fill: "#2174b6" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="355"
            r="5"
            style={{ fill: "#1c77c0" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="355"
            r="5"
            style={{ fill: "#1c77c0" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="355"
            r="5"
            style={{ fill: "#2279bc" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="355"
            r="5"
            style={{ fill: "#1d74b9" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="355"
            r="5"
            style={{ fill: "#1e79c2" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="355"
            r="5"
            style={{ fill: "#fafcfb" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="365"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="365"
            r="5"
            style={{ fill: "#b4dbfc" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="365"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="365"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="365"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="365"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="365"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="365"
            r="5"
            style={{ fill: "#b3d6f2" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="365"
            r="5"
            style={{ fill: "#b3d1eb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="365"
            r="5"
            style={{ fill: "#afd3eb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="365"
            r="5"
            style={{ fill: "#2474b3" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="365"
            r="5"
            style={{ fill: "#b9d8ed" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="365"
            r="5"
            style={{ fill: "#b6d9ed" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="365"
            r="5"
            style={{ fill: "#3784bc" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="365"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="365"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="365"
            r="5"
            style={{ fill: "#1f77bf" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="365"
            r="5"
            style={{ fill: "#1f72b6" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="365"
            r="5"
            style={{ fill: "#e9fcff" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="365"
            r="5"
            style={{ fill: "#f0feff" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="365"
            r="5"
            style={{ fill: "#336d9f" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="365"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="365"
            r="5"
            style={{ fill: "#1972b6" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="365"
            r="5"
            style={{ fill: "#b9d7ef" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="365"
            r="5"
            style={{ fill: "#b8d8ed" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="365"
            r="5"
            style={{ fill: "#639fd3" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="365"
            r="5"
            style={{ fill: "#1b77c0" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="365"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="365"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="365"
            r="5"
            style={{ fill: "#1d71b9" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="365"
            r="5"
            style={{ fill: "#e9fbff" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="365"
            r="5"
            style={{ fill: "#266598" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="365"
            r="5"
            style={{ fill: "#2778ba" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="365"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="365"
            r="5"
            style={{ fill: "#1a77c4" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="375"
            r="5"
            style={{ fill: "#5e94c0" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="375"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="375"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="375"
            r="5"
            style={{ fill: "#9acaee" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="375"
            r="5"
            style={{ fill: "#c6e2ee" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="375"
            r="5"
            style={{ fill: "#fefefc" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="375"
            r="5"
            style={{ fill: "#2376ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="375"
            r="5"
            style={{ fill: "#2071b2" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="375"
            r="5"
            style={{ fill: "#85bae2" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="375"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="375"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="375"
            r="5"
            style={{ fill: "#2275b9" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="375"
            r="5"
            style={{ fill: "#2271b3" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="375"
            r="5"
            style={{ fill: "#9dcbed" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="375"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="375"
            r="5"
            style={{ fill: "#1a77bd" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="375"
            r="5"
            style={{ fill: "#97c9ee" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="375"
            r="5"
            style={{ fill: "#9cc8eb" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="375"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="375"
            r="5"
            style={{ fill: "#1c77be" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="375"
            r="5"
            style={{ fill: "#2574af" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="375"
            r="5"
            style={{ fill: "#a0ccef" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="375"
            r="5"
            style={{ fill: "#2374b5" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="375"
            r="5"
            style={{ fill: "#2275b9" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="375"
            r="5"
            style={{ fill: "#9acef6" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="375"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_10"
            cx="95"
            cy="385"
            r="5"
            style={{ fill: "#508ebd" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="385"
            r="5"
            style={{ fill: "#2477bb" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="385"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="385"
            r="5"
            style={{ fill: "#79a7c9" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="385"
            r="5"
            style={{ fill: "#fdfdfb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="385"
            r="5"
            style={{ fill: "#2376ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="385"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="385"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="385"
            r="5"
            style={{ fill: "#4485bb" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="385"
            r="5"
            style={{ fill: "#1e75b8" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="385"
            r="5"
            style={{ fill: "#2974b7" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="385"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="385"
            r="5"
            style={{ fill: "#176caf" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="385"
            r="5"
            style={{ fill: "#2574b6" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="385"
            r="5"
            style={{ fill: "#1c77bd" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="385"
            r="5"
            style={{ fill: "#1d76ba" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="385"
            r="5"
            style={{ fill: "#9cc8eb" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="385"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="385"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="385"
            r="5"
            style={{ fill: "#1e76be" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="385"
            r="5"
            style={{ fill: "#2275b7" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="385"
            r="5"
            style={{ fill: "#1d70b2" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="385"
            r="5"
            style={{ fill: "#2077bc" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="385"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="385"
            r="5"
            style={{ fill: "#1c77c0" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="385"
            r="5"
            style={{ fill: "#fefeff" }}
          />
          <circle
            id="dot_9"
            cx="85"
            cy="395"
            r="5"
            style={{ fill: "#5591c7" }}
          />
          <circle
            id="dot_10"
            cx="95"
            cy="395"
            r="5"
            style={{ fill: "#2074ba" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="395"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="395"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="395"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="395"
            r="5"
            style={{ fill: "#7aa6cb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="395"
            r="5"
            style={{ fill: "#fefefc" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="395"
            r="5"
            style={{ fill: "#2376ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="395"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="395"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="395"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="395"
            r="5"
            style={{ fill: "#1d75bc" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="395"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="395"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="395"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="395"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="395"
            r="5"
            style={{ fill: "#9dc8eb" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="395"
            r="5"
            style={{ fill: "#2175bd" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="395"
            r="5"
            style={{ fill: "#2176b7" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="395"
            r="5"
            style={{ fill: "#f2fcff" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="395"
            r="5"
            style={{ fill: "#1c73b8" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="395"
            r="5"
            style={{ fill: "#1f78bc" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="395"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="395"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="395"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="395"
            r="5"
            style={{ fill: "#bfddf5" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="395"
            r="5"
            style={{ fill: "#d2f0ff" }}
          />
          <circle
            id="dot_8"
            cx="75"
            cy="405"
            r="5"
            style={{ fill: "#5291ba" }}
          />
          <circle
            id="dot_9"
            cx="85"
            cy="405"
            r="5"
            style={{ fill: "#1a78be" }}
          />
          <circle
            id="dot_10"
            cx="95"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="405"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="405"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="405"
            r="5"
            style={{ fill: "#7aa6cb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="405"
            r="5"
            style={{ fill: "#fdfdfb" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="405"
            r="5"
            style={{ fill: "#2376ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="405"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="405"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="405"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="405"
            r="5"
            style={{ fill: "#1d75bc" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="405"
            r="5"
            style={{ fill: "#2078bf" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="405"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="405"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="405"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="405"
            r="5"
            style={{ fill: "#c2eaff" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="405"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="405"
            r="5"
            style={{ fill: "#2176b7" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="405"
            r="5"
            style={{ fill: "#f3fdff" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="405"
            r="5"
            style={{ fill: "#1c73b8" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="405"
            r="5"
            style={{ fill: "#1d76ba" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="405"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="405"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="405"
            r="5"
            style={{ fill: "#c6ddef" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="405"
            r="5"
            style={{ fill: "#2079bb" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="405"
            r="5"
            style={{ fill: "#ceecff" }}
          />
          <circle
            id="dot_7"
            cx="65"
            cy="415"
            r="5"
            style={{ fill: "#5092c2" }}
          />
          <circle
            id="dot_8"
            cx="75"
            cy="415"
            r="5"
            style={{ fill: "#2279be" }}
          />
          <circle
            id="dot_9"
            cx="85"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_10"
            cx="95"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="415"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="415"
            r="5"
            style={{ fill: "#1f78ba" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="415"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="415"
            r="5"
            style={{ fill: "#7aa6cb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="415"
            r="5"
            style={{ fill: "#fefefc" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="415"
            r="5"
            style={{ fill: "#2376ba" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="415"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="415"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="415"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="415"
            r="5"
            style={{ fill: "#2075b8" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="415"
            r="5"
            style={{ fill: "#2077bc" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="415"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="415"
            r="5"
            style={{ fill: "#1e75ba" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="415"
            r="5"
            style={{ fill: "#c3ebff" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="415"
            r="5"
            style={{ fill: "#1e76bd" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="415"
            r="5"
            style={{ fill: "#1f77b7" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="415"
            r="5"
            style={{ fill: "#f1feff" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="415"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="415"
            r="5"
            style={{ fill: "#1b73ba" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="415"
            r="5"
            style={{ fill: "#1d76ba" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="415"
            r="5"
            style={{ fill: "#1f76bd" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="415"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="415"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="415"
            r="5"
            style={{ fill: "#c3ddee" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="415"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="415"
            r="5"
            style={{ fill: "#1c78c1" }}
          />
          <circle
            id="dot_74"
            cx="735"
            cy="415"
            r="5"
            style={{ fill: "#cfe8fc" }}
          />
          <circle
            id="dot_5"
            cx="45"
            cy="425"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_6"
            cx="55"
            cy="425"
            r="5"
            style={{ fill: "#548ec0" }}
          />
          <circle
            id="dot_7"
            cx="65"
            cy="425"
            r="5"
            style={{ fill: "#2075b6" }}
          />
          <circle
            id="dot_8"
            cx="75"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_9"
            cx="85"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_10"
            cx="95"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="425"
            r="5"
            style={{ fill: "#1c78bb" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="425"
            r="5"
            style={{ fill: "#79a7cb" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="425"
            r="5"
            style={{ fill: "#fcfefd" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="425"
            r="5"
            style={{ fill: "#2277b8" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="425"
            r="5"
            style={{ fill: "#2077ba" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="425"
            r="5"
            style={{ fill: "#4386bd" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="425"
            r="5"
            style={{ fill: "#2178bf" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="425"
            r="5"
            style={{ fill: "#fafbfd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="425"
            r="5"
            style={{ fill: "#1e77bb" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="425"
            r="5"
            style={{ fill: "#1b6cae" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="425"
            r="5"
            style={{ fill: "#fdfdfb" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="425"
            r="5"
            style={{ fill: "#1c78bb" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="425"
            r="5"
            style={{ fill: "#2175bb" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="425"
            r="5"
            style={{ fill: "#1e75b8" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="425"
            r="5"
            style={{ fill: "#c5eaff" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="425"
            r="5"
            style={{ fill: "#1e76be" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="425"
            r="5"
            style={{ fill: "#1f77b7" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="425"
            r="5"
            style={{ fill: "#f2f9ff" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="425"
            r="5"
            style={{ fill: "#236fa9" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="425"
            r="5"
            style={{ fill: "#1c74bb" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="425"
            r="5"
            style={{ fill: "#2176b9" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="425"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="425"
            r="5"
            style={{ fill: "#c3dcf0" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="425"
            r="5"
            style={{ fill: "#1f76b9" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="425"
            r="5"
            style={{ fill: "#1f76bb" }}
          />
          <circle
            id="dot_74"
            cx="735"
            cy="425"
            r="5"
            style={{ fill: "#1e76be" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="425"
            r="5"
            style={{ fill: "#c8e7fc" }}
          />
          <circle
            id="dot_7"
            cx="65"
            cy="435"
            r="5"
            style={{ fill: "#c1dcf7" }}
          />
          <circle
            id="dot_8"
            cx="75"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_9"
            cx="85"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_10"
            cx="95"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="435"
            r="5"
            style={{ fill: "#c0def6" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="435"
            r="5"
            style={{ fill: "#c5e1f6" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="435"
            r="5"
            style={{ fill: "#c0def8" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="435"
            r="5"
            style={{ fill: "#d9e9f8" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="435"
            r="5"
            style={{ fill: "#fcfef9" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf1" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="435"
            r="5"
            style={{ fill: "#c6dbee" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="435"
            r="5"
            style={{ fill: "#bedcf4" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="435"
            r="5"
            style={{ fill: "#c4d7e6" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="435"
            r="5"
            style={{ fill: "#c1daf8" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf5" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="435"
            r="5"
            style={{ fill: "#c2dcf5" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="435"
            r="5"
            style={{ fill: "#e8f7fe" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="435"
            r="5"
            style={{ fill: "#bedcf8" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="435"
            r="5"
            style={{ fill: "#bedef5" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="435"
            r="5"
            style={{ fill: "#beddf2" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="435"
            r="5"
            style={{ fill: "#bbddf6" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="435"
            r="5"
            style={{ fill: "#bfddf5" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf4" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="435"
            r="5"
            style={{ fill: "#beddf2" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="435"
            r="5"
            style={{ fill: "#eaf4fe" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="435"
            r="5"
            style={{ fill: "#c1ddf3" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="435"
            r="5"
            style={{ fill: "#c0dcf2" }}
          />
          <circle
            id="dot_74"
            cx="735"
            cy="435"
            r="5"
            style={{ fill: "#c2dcf3" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="435"
            r="5"
            style={{ fill: "#bfddf5" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="435"
            r="5"
            style={{ fill: "#fcfdff" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="465"
            r="5"
            style={{ fill: "#50aa77" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="465"
            r="5"
            style={{ fill: "#50ae79" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="465"
            r="5"
            style={{ fill: "#55ac79" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="465"
            r="5"
            style={{ fill: "#5dac7f" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="465"
            r="5"
            style={{ fill: "#f2f2f2" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="465"
            r="5"
            style={{ fill: "#0f0f0f" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_42"
            cx="415"
            cy="465"
            r="5"
            style={{ fill: "#212121" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="465"
            r="5"
            style={{ fill: "#0d0d0d" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="465"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="465"
            r="5"
            style={{ fill: "#d9d9d9" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="465"
            r="5"
            style={{ fill: "#0a0a0a" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="465"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="465"
            r="5"
            style={{ fill: "#0f0f0f" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="465"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="465"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="465"
            r="5"
            style={{ fill: "#6e6e6e" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="465"
            r="5"
            style={{ fill: "#0f0f0f" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="465"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="465"
            r="5"
            style={{ fill: "#414141" }}
          />
          <circle
            id="dot_11"
            cx="105"
            cy="475"
            r="5"
            style={{ fill: "#49b176" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="475"
            r="5"
            style={{ fill: "#45b271" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="475"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="475"
            r="5"
            style={{ fill: "#47b16f" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="475"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="475"
            r="5"
            style={{ fill: "#f4f4f4" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="475"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="475"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="475"
            r="5"
            style={{ fill: "#959595" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="475"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="475"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="475"
            r="5"
            style={{ fill: "#868686" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="475"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="475"
            r="5"
            style={{ fill: "#888888" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="475"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="475"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="475"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="475"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="475"
            r="5"
            style={{ fill: "#040404" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="475"
            r="5"
            style={{ fill: "#585858" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="485"
            r="5"
            style={{ fill: "#45b173" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="485"
            r="5"
            style={{ fill: "#4ab071" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="485"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="485"
            r="5"
            style={{ fill: "#47b171" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="485"
            r="5"
            style={{ fill: "#47b16f" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="485"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="485"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="485"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="485"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="485"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="485"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="485"
            r="5"
            style={{ fill: "#d0d0d0" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="485"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="485"
            r="5"
            style={{ fill: "#e4e4e4" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="485"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="485"
            r="5"
            style={{ fill: "#676767" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="485"
            r="5"
            style={{ fill: "#0a0a0a" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="485"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="485"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="485"
            r="5"
            style={{ fill: "#0a0a0a" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="485"
            r="5"
            style={{ fill: "#5a5a5a" }}
          />
          <circle
            id="dot_12"
            cx="115"
            cy="495"
            r="5"
            style={{ fill: "#fbfcfe" }}
          />
          <circle
            id="dot_13"
            cx="125"
            cy="495"
            r="5"
            style={{ fill: "#4ab071" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="495"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="495"
            r="5"
            style={{ fill: "#47b171" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="495"
            r="5"
            style={{ fill: "#47b16f" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="495"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="495"
            r="5"
            style={{ fill: "#fafafa" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="495"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="495"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="495"
            r="5"
            style={{ fill: "#ececec" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="495"
            r="5"
            style={{ fill: "#676767" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="495"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="495"
            r="5"
            style={{ fill: "#353535" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="495"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="495"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="495"
            r="5"
            style={{ fill: "#050505" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="495"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="495"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="505"
            r="5"
            style={{ fill: "#44b36f" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="505"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="505"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="505"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="505"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="505"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="505"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="505"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="505"
            r="5"
            style={{ fill: "#e3e3e3" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="505"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="505"
            r="5"
            style={{ fill: "#676767" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="505"
            r="5"
            style={{ fill: "#090909" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="505"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="505"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="505"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="505"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="505"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_14"
            cx="135"
            cy="515"
            r="5"
            style={{ fill: "#fdfdfb" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="515"
            r="5"
            style={{ fill: "#4bb074" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="515"
            r="5"
            style={{ fill: "#4eae71" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="515"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="515"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="515"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="515"
            r="5"
            style={{ fill: "#060606" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="515"
            r="5"
            style={{ fill: "#696969" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="515"
            r="5"
            style={{ fill: "#686868" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="515"
            r="5"
            style={{ fill: "#686868" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="515"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="515"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="515"
            r="5"
            style={{ fill: "#fbfbfb" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="515"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="515"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="515"
            r="5"
            style={{ fill: "#696969" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="515"
            r="5"
            style={{ fill: "#686868" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="515"
            r="5"
            style={{ fill: "#686868" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="515"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="515"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="515"
            r="5"
            style={{ fill: "#d9d9d9" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="515"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="515"
            r="5"
            style={{ fill: "#5f5f5f" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="515"
            r="5"
            style={{ fill: "#686868" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="515"
            r="5"
            style={{ fill: "#686868" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="515"
            r="5"
            style={{ fill: "#5f5f5f" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="515"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="515"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="515"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="515"
            r="5"
            style={{ fill: "#aaaaaa" }}
          />
          <circle
            id="dot_15"
            cx="145"
            cy="525"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_16"
            cx="155"
            cy="525"
            r="5"
            style={{ fill: "#44b072" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="525"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="525"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="525"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_49"
            cx="485"
            cy="525"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="525"
            r="5"
            style={{ fill: "#f9f9f9" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="525"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="525"
            r="5"
            style={{ fill: "#f6f6f6" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="525"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="525"
            r="5"
            style={{ fill: "#f4f4f4" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="525"
            r="5"
            style={{ fill: "#f6f6f6" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="525"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="525"
            r="5"
            style={{ fill: "#e8e8e8" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="535"
            r="5"
            style={{ fill: "#4db276" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="535"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="535"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_17"
            cx="165"
            cy="545"
            r="5"
            style={{ fill: "#fafefd" }}
          />
          <circle
            id="dot_18"
            cx="175"
            cy="545"
            r="5"
            style={{ fill: "#49ae72" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="545"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="545"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="545"
            r="5"
            style={{ fill: "#fafafa" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="545"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="545"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="545"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="545"
            r="5"
            style={{ fill: "#f9f9f9" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="545"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="545"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="545"
            r="5"
            style={{ fill: "#fbfbfb" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="545"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="545"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="545"
            r="5"
            style={{ fill: "#f1f1f1" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="545"
            r="5"
            style={{ fill: "#f5f5f5" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="545"
            r="5"
            style={{ fill: "#f2f2f2" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="545"
            r="5"
            style={{ fill: "#f2f2f2" }}
          />
          <circle
            id="dot_78"
            cx="775"
            cy="545"
            r="5"
            style={{ fill: "#f2f2f2" }}
          />
          <circle
            id="dot_79"
            cx="785"
            cy="545"
            r="5"
            style={{ fill: "#f1f1f1" }}
          />
          <circle
            id="dot_81"
            cx="805"
            cy="545"
            r="5"
            style={{ fill: "#f6f6f6" }}
          />
          <circle
            id="dot_86"
            cx="855"
            cy="545"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_87"
            cx="865"
            cy="545"
            r="5"
            style={{ fill: "#f4f4f4" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="555"
            r="5"
            style={{ fill: "#4eb178" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="555"
            r="5"
            style={{ fill: "#4baf6f" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="555"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="555"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="555"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="555"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="555"
            r="5"
            style={{ fill: "#454545" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="555"
            r="5"
            style={{ fill: "#454545" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="555"
            r="5"
            style={{ fill: "#454545" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="555"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="555"
            r="5"
            style={{ fill: "#1f1f1f" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="555"
            r="5"
            style={{ fill: "#454545" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="555"
            r="5"
            style={{ fill: "#454545" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="555"
            r="5"
            style={{ fill: "#444444" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="555"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="555"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="555"
            r="5"
            style={{ fill: "#525252" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="555"
            r="5"
            style={{ fill: "#545454" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="555"
            r="5"
            style={{ fill: "#545454" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="555"
            r="5"
            style={{ fill: "#9e9e9e" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="555"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="555"
            r="5"
            style={{ fill: "#c3c3c3" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="555"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="555"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="555"
            r="5"
            style={{ fill: "#474747" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="555"
            r="5"
            style={{ fill: "#454545" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="555"
            r="5"
            style={{ fill: "#444444" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="555"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="555"
            r="5"
            style={{ fill: "#585858" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="555"
            r="5"
            style={{ fill: "#e0e0e0" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="555"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="555"
            r="5"
            style={{ fill: "#515151" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="555"
            r="5"
            style={{ fill: "#545454" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="555"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_78"
            cx="775"
            cy="555"
            r="5"
            style={{ fill: "#555555" }}
          />
          <circle
            id="dot_79"
            cx="785"
            cy="555"
            r="5"
            style={{ fill: "#535353" }}
          />
          <circle
            id="dot_80"
            cx="795"
            cy="555"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_81"
            cx="805"
            cy="555"
            r="5"
            style={{ fill: "#a9a9a9" }}
          />
          <circle
            id="dot_82"
            cx="815"
            cy="555"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_83"
            cx="825"
            cy="555"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_85"
            cx="845"
            cy="555"
            r="5"
            style={{ fill: "#c3c3c3" }}
          />
          <circle
            id="dot_86"
            cx="855"
            cy="555"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_87"
            cx="865"
            cy="555"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_19"
            cx="185"
            cy="565"
            r="5"
            style={{ fill: "#fdfeff" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="565"
            r="5"
            style={{ fill: "#48b073" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="565"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="565"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="565"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="565"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="565"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="565"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="565"
            r="5"
            style={{ fill: "#dadada" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="565"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="565"
            r="5"
            style={{ fill: "#c3c3c3" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="565"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="565"
            r="5"
            style={{ fill: "#101010" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="565"
            r="5"
            style={{ fill: "#2e2e2e" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="565"
            r="5"
            style={{ fill: "#e0e0e0" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_78"
            cx="775"
            cy="565"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_81"
            cx="805"
            cy="565"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_82"
            cx="815"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_83"
            cx="825"
            cy="565"
            r="5"
            style={{ fill: "#181818" }}
          />
          <circle
            id="dot_84"
            cx="835"
            cy="565"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_85"
            cx="845"
            cy="565"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_20"
            cx="195"
            cy="575"
            r="5"
            style={{ fill: "#fbfdfc" }}
          />
          <circle
            id="dot_21"
            cx="205"
            cy="575"
            r="5"
            style={{ fill: "#4baf71" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="575"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="575"
            r="5"
            style={{ fill: "#4cb070" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="575"
            r="5"
            style={{ fill: "#171717" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="575"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="575"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="575"
            r="5"
            style={{ fill: "#dadada" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="575"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="575"
            r="5"
            style={{ fill: "#c3c3c3" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="575"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="575"
            r="5"
            style={{ fill: "#767676" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="575"
            r="5"
            style={{ fill: "#4b4b4b" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="575"
            r="5"
            style={{ fill: "#3c3c3c" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="575"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="575"
            r="5"
            style={{ fill: "#a1a1a1" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="575"
            r="5"
            style={{ fill: "#e0e0e0" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_78"
            cx="775"
            cy="575"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_83"
            cx="825"
            cy="575"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_84"
            cx="835"
            cy="575"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_85"
            cx="845"
            cy="575"
            r="5"
            style={{ fill: "#f2f2f2" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="585"
            r="5"
            style={{ fill: "#4ab071" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="585"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="585"
            r="5"
            style={{ fill: "#fefcfd" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="585"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="585"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="585"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="585"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="585"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="585"
            r="5"
            style={{ fill: "#dadada" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="585"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="585"
            r="5"
            style={{ fill: "#c3c3c3" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="585"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="585"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="585"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="585"
            r="5"
            style={{ fill: "#393939" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="585"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="585"
            r="5"
            style={{ fill: "#e0e0e0" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="585"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="585"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_78"
            cx="775"
            cy="585"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_83"
            cx="825"
            cy="585"
            r="5"
            style={{ fill: "#f1f1f1" }}
          />
          <circle
            id="dot_84"
            cx="835"
            cy="585"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_22"
            cx="215"
            cy="595"
            r="5"
            style={{ fill: "#fdfcff" }}
          />
          <circle
            id="dot_23"
            cx="225"
            cy="595"
            r="5"
            style={{ fill: "#4baf73" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="595"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="595"
            r="5"
            style={{ fill: "#fbfbfb" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="595"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="595"
            r="5"
            style={{ fill: "#676767" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="595"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="595"
            r="5"
            style={{ fill: "#2c2c2c" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="595"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="595"
            r="5"
            style={{ fill: "#f1f1f1" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="595"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="595"
            r="5"
            style={{ fill: "#dedede" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_78"
            cx="775"
            cy="595"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_83"
            cx="825"
            cy="595"
            r="5"
            style={{ fill: "#efefef" }}
          />
          <circle
            id="dot_84"
            cx="835"
            cy="595"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_24"
            cx="235"
            cy="605"
            r="5"
            style={{ fill: "#4fb176" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="605"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="605"
            r="5"
            style={{ fill: "#060606" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="605"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="605"
            r="5"
            style={{ fill: "#b3b3b3" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="605"
            r="5"
            style={{ fill: "#d3d3d3" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="605"
            r="5"
            style={{ fill: "#131313" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="605"
            r="5"
            style={{ fill: "#050505" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="605"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="605"
            r="5"
            style={{ fill: "#262626" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="605"
            r="5"
            style={{ fill: "#707070" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="605"
            r="5"
            style={{ fill: "#2f2f2f" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="605"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="605"
            r="5"
            style={{ fill: "#0a0a0a" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="605"
            r="5"
            style={{ fill: "#ececec" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="605"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="605"
            r="5"
            style={{ fill: "#060606" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="605"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="605"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_70"
            cx="695"
            cy="605"
            r="5"
            style={{ fill: "#8b8b8b" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="605"
            r="5"
            style={{ fill: "#e1e1e1" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="605"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_83"
            cx="825"
            cy="605"
            r="5"
            style={{ fill: "#f2f2f2" }}
          />
          <circle
            id="dot_84"
            cx="835"
            cy="605"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_25"
            cx="245"
            cy="615"
            r="5"
            style={{ fill: "#49b176" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="615"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="615"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="615"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="615"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="615"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="615"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="615"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_26"
            cx="255"
            cy="625"
            r="5"
            style={{ fill: "#4bae75" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="625"
            r="5"
            style={{ fill: "#4aaf73" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="625"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="625"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="625"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="625"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="625"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="625"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="625"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="625"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_27"
            cx="265"
            cy="635"
            r="5"
            style={{ fill: "#4faa71" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="635"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="635"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="635"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="635"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="635"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="635"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="635"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="635"
            r="5"
            style={{ fill: "#040404" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="635"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="635"
            r="5"
            style={{ fill: "#c0c0c0" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="635"
            r="5"
            style={{ fill: "#2b2b2b" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="635"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="635"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_56"
            cx="555"
            cy="635"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_57"
            cx="565"
            cy="635"
            r="5"
            style={{ fill: "#ececec" }}
          />
          <circle
            id="dot_58"
            cx="575"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="635"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="635"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="635"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="635"
            r="5"
            style={{ fill: "#636363" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="635"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="635"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="635"
            r="5"
            style={{ fill: "#bcbcbc" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="635"
            r="5"
            style={{ fill: "#dfdfdf" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_74"
            cx="735"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="635"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="635"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="635"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="645"
            r="5"
            style={{ fill: "#4cae75" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="645"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="645"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="645"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="645"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="645"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="645"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="645"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="645"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="645"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="645"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="645"
            r="5"
            style={{ fill: "#0c0c0c" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="645"
            r="5"
            style={{ fill: "#7b7b7b" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="645"
            r="5"
            style={{ fill: "#040404" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="645"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="645"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="645"
            r="5"
            style={{ fill: "#e7e7e7" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="645"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_62"
            cx="615"
            cy="645"
            r="5"
            style={{ fill: "#fbfbfb" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="645"
            r="5"
            style={{ fill: "#030303" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="645"
            r="5"
            style={{ fill: "#f9f9f9" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="645"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="645"
            r="5"
            style={{ fill: "#e0e0e0" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="645"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="645"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="645"
            r="5"
            style={{ fill: "#e5e5e5" }}
          />
          <circle
            id="dot_28"
            cx="275"
            cy="655"
            r="5"
            style={{ fill: "#fdfcff" }}
          />
          <circle
            id="dot_29"
            cx="285"
            cy="655"
            r="5"
            style={{ fill: "#4ab071" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="655"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="655"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="655"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="655"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="655"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="655"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="655"
            r="5"
            style={{ fill: "#ababab" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="655"
            r="5"
            style={{ fill: "#a7a7a7" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="655"
            r="5"
            style={{ fill: "#a7a7a7" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="655"
            r="5"
            style={{ fill: "#a8a8a8" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="655"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="655"
            r="5"
            style={{ fill: "#0c0c0c" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="655"
            r="5"
            style={{ fill: "#6d6d6d" }}
          />
          <circle
            id="dot_52"
            cx="515"
            cy="655"
            r="5"
            style={{ fill: "#2d2d2d" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="655"
            r="5"
            style={{ fill: "#161616" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="655"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="655"
            r="5"
            style={{ fill: "#e3e3e3" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="655"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="655"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="655"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="655"
            r="5"
            style={{ fill: "#a2a2a2" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="655"
            r="5"
            style={{ fill: "#a7a7a7" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="655"
            r="5"
            style={{ fill: "#a7a7a7" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="655"
            r="5"
            style={{ fill: "#a7a7a7" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="655"
            r="5"
            style={{ fill: "#e0e0e0" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="655"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="655"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="655"
            r="5"
            style={{ fill: "#050505" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="655"
            r="5"
            style={{ fill: "#ececec" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="665"
            r="5"
            style={{ fill: "#4aaf73" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="665"
            r="5"
            style={{ fill: "#48b071" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="665"
            r="5"
            style={{ fill: "#49b172" }}
          />
          <circle
            id="dot_33"
            cx="325"
            cy="665"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="665"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="665"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="665"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="665"
            r="5"
            style={{ fill: "#f7f7f7" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="665"
            r="5"
            style={{ fill: "#f5f5f5" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="665"
            r="5"
            style={{ fill: "#f5f5f5" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="665"
            r="5"
            style={{ fill: "#f6f6f6" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="665"
            r="5"
            style={{ fill: "#0c0c0c" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="665"
            r="5"
            style={{ fill: "#6d6d6d" }}
          />
          <circle
            id="dot_53"
            cx="525"
            cy="665"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="665"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="665"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="665"
            r="5"
            style={{ fill: "#e3e3e3" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="665"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="665"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="665"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="665"
            r="5"
            style={{ fill: "#f1f1f1" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="665"
            r="5"
            style={{ fill: "#f5f5f5" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="665"
            r="5"
            style={{ fill: "#f5f5f5" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="665"
            r="5"
            style={{ fill: "#f5f5f5" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="665"
            r="5"
            style={{ fill: "#e0e0e0" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="665"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_73"
            cx="725"
            cy="665"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_74"
            cx="735"
            cy="665"
            r="5"
            style={{ fill: "#4f4f4f" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="665"
            r="5"
            style={{ fill: "#696969" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="665"
            r="5"
            style={{ fill: "#f2f2f2" }}
          />
          <circle
            id="dot_30"
            cx="295"
            cy="675"
            r="5"
            style={{ fill: "#fbfbfb" }}
          />
          <circle
            id="dot_31"
            cx="305"
            cy="675"
            r="5"
            style={{ fill: "#49ac73" }}
          />
          <circle
            id="dot_32"
            cx="315"
            cy="675"
            r="5"
            style={{ fill: "#4cb676" }}
          />
          <circle
            id="dot_35"
            cx="345"
            cy="675"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="675"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_41"
            cx="405"
            cy="675"
            r="5"
            style={{ fill: "#fcfcfc" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="675"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="675"
            r="5"
            style={{ fill: "#0d0d0d" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="675"
            r="5"
            style={{ fill: "#6d6d6d" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="675"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="675"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="675"
            r="5"
            style={{ fill: "#e3e3e3" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="675"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="675"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_63"
            cx="625"
            cy="675"
            r="5"
            style={{ fill: "#fefefe" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="675"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="675"
            r="5"
            style={{ fill: "#f8f8f8" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="675"
            r="5"
            style={{ fill: "#dfdfdf" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="675"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_74"
            cx="735"
            cy="675"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="675"
            r="5"
            style={{ fill: "#393939" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="675"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_36"
            cx="355"
            cy="685"
            r="5"
            style={{ fill: "#282828" }}
          />
          <circle
            id="dot_37"
            cx="365"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_38"
            cx="375"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_39"
            cx="385"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_40"
            cx="395"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_43"
            cx="425"
            cy="685"
            r="5"
            style={{ fill: "#4b4b4b" }}
          />
          <circle
            id="dot_44"
            cx="435"
            cy="685"
            r="5"
            style={{ fill: "#020202" }}
          />
          <circle
            id="dot_45"
            cx="445"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_46"
            cx="455"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_47"
            cx="465"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_48"
            cx="475"
            cy="685"
            r="5"
            style={{ fill: "#bfbfbf" }}
          />
          <circle
            id="dot_50"
            cx="495"
            cy="685"
            r="5"
            style={{ fill: "#0e0e0e" }}
          />
          <circle
            id="dot_51"
            cx="505"
            cy="685"
            r="5"
            style={{ fill: "#6a6a6a" }}
          />
          <circle
            id="dot_54"
            cx="535"
            cy="685"
            r="5"
            style={{ fill: "#0b0b0b" }}
          />
          <circle
            id="dot_55"
            cx="545"
            cy="685"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_59"
            cx="585"
            cy="685"
            r="5"
            style={{ fill: "#e4e4e4" }}
          />
          <circle
            id="dot_60"
            cx="595"
            cy="685"
            r="5"
            style={{ fill: "#010101" }}
          />
          <circle
            id="dot_61"
            cx="605"
            cy="685"
            r="5"
            style={{ fill: "#fdfdfd" }}
          />
          <circle
            id="dot_64"
            cx="635"
            cy="685"
            r="5"
            style={{ fill: "#999999" }}
          />
          <circle
            id="dot_65"
            cx="645"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_66"
            cx="655"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_67"
            cx="665"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_68"
            cx="675"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_69"
            cx="685"
            cy="685"
            r="5"
            style={{ fill: "#c2c2c2" }}
          />
          <circle
            id="dot_71"
            cx="705"
            cy="685"
            r="5"
            style={{ fill: "#e1e1e1" }}
          />
          <circle
            id="dot_72"
            cx="715"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_75"
            cx="745"
            cy="685"
            r="5"
            style={{ fill: "#4d4d4d" }}
          />
          <circle
            id="dot_76"
            cx="755"
            cy="685"
            r="5"
            style={{ fill: "#000000" }}
          />
          <circle
            id="dot_77"
            cx="765"
            cy="685"
            r="5"
            style={{ fill: "#fefefe" }}
          />
        </g>
      </g>
    </LogoContainer>
  );
};

export default CsecSvg;
