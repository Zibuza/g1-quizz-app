import React, { useEffect, useState } from "react";
import ThemeChange from "./components/dark/light/ThemeChange";

const App = () => {  


  return (
    <main className="w-full h-[100dvh] bg-light-gray p-[30px] dark:bg-dark-navy">
  <ThemeChange />
</main>

  );
};

export default App;
