import React from "react";
import ThemeChange from "./components/themeChanger/ThemeChange";
import QuizButtons from "./components/quizz/QuizButtons";
const App = () => {
  return (
    <main className="w-[100vw] h-[100dvh] bg-[#ecf0f6] p-[30px] dark:bg-dark-navy space-y-4">
      <ThemeChange />
      <QuizButtons />
      <div className="w-[500px]">
        <h1 className="text-5xl font-bold text-gray-600 dark:text-white mt-[-270px] ml-29">
          Welcome to the
          <span className="text-gray-700 dark:text-gray-300">
            {" "}
            Frontend quiz
          </span>
        </h1>
        <p className="ml-29 mt-7 text-gray-600 dark:text-gray-400">
          Pick a subject to get started
        </p>
      </div>
    </main>
  );
};


export default App;
