import React, { useState, useEffect } from "react";
import lightIcon from "/fluent_weather-sunny-16-regular.svg"
import darkIcon from "/fluent_weather-moon-16-regular.svg"
export default function ThemeChange() {
  const [colorTheme, setColorTheme] = useState("light");
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (colorTheme === "light") {
      document.querySelector("html").classList.remove("dark");
    } else {
      document.querySelector("html").classList.add("dark");
    }
  }, [colorTheme]);

  return (
    <div className="flex gap-4 float-right m-0 mr-[10%]">
       <img src={lightIcon} alt="" />
      <div
        className="relative flex m-0  w-12 h-7 bg-purple  rounded-full cursor-pointer items-center"
        onClick={() => {
          setColorTheme(colorTheme === "light" ? "dark" : "light");
          setIsSelected(!isSelected);
        }}
      >
        <span
          className={`absolute h-5 w-5 left-0.5 bg-white rounded-full transition-transform duration-300  ${
            isSelected ? "translate-x-6" : "translate-x-0"
          }`}
        ></span>
      </div>
      <img src={darkIcon}/>

    </div>
  );
}
