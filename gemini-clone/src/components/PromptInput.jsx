import { useUser } from "@clerk/clerk-react";
import React, { useContext, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { MdMicNone } from "react-icons/md";
import { Context } from "../context/Context";

const PromptInput = () => {
  const { handleSend, input, setInput, loading } = useContext(Context);

  return (
    <section className="mt-10">
      <div className="relative flex items-center overflow-hidden">
        <input
          type="text"
          placeholder="Enter a prompt here"
          className="w-full bg-[#1A1A1C] rounded-full p-5 text-gray-300 outline-none focus:bg-[#2C2C2E] space-x-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
        />

        <button
          className={`absolute transition-all duration-300 right-8 top-2.5 text-gray-200 rounded-full disabled:text-gray-500 hover:bg-[#2C2C2E] ${
            input.length > 0 ? "translate-x-6" : "translate-x-[200%]"
          }`}
          onClick={() => handleSend(input)}
          disabled={loading}
        >
          <AiOutlineSend
            size={25}
            className="cursor-pointer hover:bg-[#1A1A1C] w-12 h-12 p-3 rounded-full"
          />
        </button>

        <div
          className={`absolute transition-all duration-300 top-2 text-gray-200 hover:bg-[#2C2C2E] rounded-full p-3 ${
            input.length > 0 ? "right-[100px]" : "right-20"
          }`}
        >
          <BiImageAdd size={25} className="cursor-pointer" />
        </div>
        <div
          className={`absolute transition-all duration-300 top-2.5 text-gray-200 rounded-full ${
            input.length > 0 ? "right-14" : "right-8"
          }`}
        >
          <MdMicNone
            size={25}
            className="cursor-pointer hover:bg-[#2C2C2E] w-12 h-12 p-3 rounded-full"
          />
        </div>
      </div>

      <p className="text-gray-300 mt-3 text-xs text-center">
        Gemini may display inaccurate info, including about people, so double-check its responses.
        <span className="text-blue-500 underline"> Your privacy and Gemini Apps</span>
      </p>
    </section>
  );
};

export default PromptInput;
