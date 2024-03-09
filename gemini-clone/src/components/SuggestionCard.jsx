import React, { useContext } from "react";
import { cardData } from "../constant";
import { Context } from "../context/Context";

const SuggestionCard = () => {
  const { setInput, handleSend } = useContext(Context);

  return (
    <section className="flex flex-col sm:flex-wrap sm:justify-center pt-20 sm:pt-24 sm:flex-row sm:gap-3">
      {cardData.map(({ title, icon }) => (
        <div
          className="relative w-full sm:w-48 rounded-2xl h-auto sm:h-48 bg-[#1E1F20] hover:bg-[#2C2C2E] p-3 text-gray-300 cursor-pointer font-normal text-lg leading-snug mb-4 sm:mb-0"
          key={title}
          onClick={() => handleSend(title)}
        >
          {title}
          <div className="absolute bottom-1 sm:bottom-5 right-2 sm:right-5 bg-[#131314] p-2 sm:p-3 rounded-full">
            <img src={icon} alt="icon" className="w-6 h-6" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default SuggestionCard;
