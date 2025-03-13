import React, { useEffect, useState } from "react";

const QuizButtons = () => {
  const [colorTheme, setColorTheme] = useState("light");

  useEffect(() => {
    const theme = document.querySelector("html").classList.contains("dark")
      ? "dark"
      : "light";
    setColorTheme(theme);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.querySelector("html").classList.contains("dark")
        ? "dark"
        : "light";
      setColorTheme(theme);
    });
    observer.observe(document.querySelector("html"), {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-30 space-y-4 mt-30 ml-250">
      <button
        className={`flex items-center gap-2 px-4 py-2 w-94 h-16 text-lg rounded-2xl shadow-md transition cursor-pointer
        ${
          colorTheme === "dark"
            ? "bg-[#3B4D66] text-white"
            : "bg-white text-dark-navy"
        }`}
      >
        <img
          src="/html.svg"
          alt="HTML Logo"
          className="w-7 h-7 bg-amber-100 rounded-sm mr-2"
        />
        <span>HTML</span>
      </button>

      <button
        className={`flex items-center gap-2 px-4 py-2 w-94 h-16 text-lg rounded-2xl shadow-md transition cursor-pointer
        ${
          colorTheme === "dark"
            ? "bg-[#3B4D66] text-white"
            : "bg-white text-dark-navy"
        }`}
      >
        <img
          src="/css.svg"
          alt="CSS Logo"
          className="w-7 h-7 bg-green-100 rounded-sm mr-2"
        />
        <span>CSS</span>
      </button>

      <button
        className={`flex items-center gap-2 px-4 py-2 w-94 h-16 text-lg rounded-2xl shadow-md transition cursor-pointer
        ${
          colorTheme === "dark"
            ? "bg-[#3B4D66] text-white"
            : "bg-white text-dark-navy"
        }`}
      >
        <img
          src="/js.svg"
          alt="JS Logo"
          className="w-7 h-7 bg-blue-100 rounded-sm mr-2"
        />
        <span>Javascript</span>
      </button>

      <button
        className={`flex items-center gap-2 px-4 py-2 w-94 h-16 text-lg rounded-2xl shadow-md transition cursor-pointer
        ${
          colorTheme === "dark"
            ? "bg-[#3B4D66] text-white"
            : "bg-white text-dark-navy"
        }`}
      >
        <img
          src="/accessibility.svg"
          alt="accessibility logo"
          className="w-7 h-7 bg-purple-100 rounded-sm mr-2"
        />
        <span>Accessibility</span>
      </button>
    </div>
  );
};

export default QuizButtons;
