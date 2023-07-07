"use client";
import Buttons from "./Buttons";
import Clock from "./Clock";
import Prices from "./Prices";

const Home = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center h-full">
      <Prices />
      <Clock />
      <Buttons />
    </div>
  );
};
export default Home;
