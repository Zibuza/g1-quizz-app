import React, { useEffect, useState } from "react";

const App = () => {

  const [colorTheme, setColorTheme] = useState("light");
  useEffect(() => {
    if (colorTheme === "light") {
      document.querySelector("html").classList.remove("dark");
    } else {
      document.querySelector("html").classList.add("dark");
    }
  }, [colorTheme]);


  return (
    <main className="w-full light h-[100dvh] bg-light-gray dark:bg-dark-navy">
      <button
        onClick={() => {
          colorTheme === "light"
            ? setColorTheme("dark")
            : setColorTheme("light");
        }}
      >
        {colorTheme}
      </button>
    </main>
  );
};

export default App;
