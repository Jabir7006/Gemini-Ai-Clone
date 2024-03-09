import React, { useContext } from "react";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

import { GoPlus } from "react-icons/go";
import { sideBarIcon } from "../constant";
import { Context } from "../context/Context";

const Sidebar = ({ extended, setExtended }) => {
  const { prevPrompts, handleSend, setRecentPrompt, newChat } = useContext(Context);

  const loadPrevPrompts = async (prompt) => {
    setRecentPrompt(prompt);
    await handleSend(prompt);
  };

  return (
    <div className="p-6 flex flex-col justify-between h-full text-gray-300">
      {/* top section */}

      <div className="flex flex-col  gap-y-16">
        <button onClick={() => setExtended(!extended)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={14}
            viewBox="0 0 20 14"
            id="menu"
          >
            <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
              <g stroke="#d1d5db" strokeWidth={2} transform="translate(-1629 -1753)">
                <g transform="translate(1630 1754)">
                  <path d="M0 6h18M0 0h18M0 12h18" />
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button
          className={`bg-[#1A1A1C] flex gap-2 w-full rounded-full hover:bg-[#2C2C2E] ${
            extended ? "p-3" : "p-1"
          }`}
          onClick={() => newChat()}
        >
          <GoPlus size={25} />
          {extended && <p>New chat</p>}
        </button>

        {/* middle section */}

        {extended && (
          <div>
            <h6 className=" text-sm font-semibold mb-2">Recent</h6>

            <div className="flex flex-col gap-y-2 max-h-[200px] overflow-y-scroll">
              {prevPrompts.length > 0 ? (
                prevPrompts.map((prompt, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-x-3 hover:text-gray-200 hover:bg-[#2C2C2E] p-2 rounded-full cursor-pointer"
                    onClick={() => loadPrevPrompts(prompt)}
                  >
                    <MdOutlineChatBubbleOutline />

                    <p className="">{prompt.slice(0, 18)} ...</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No recent chat found</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* bottom section */}
      <div className="flex flex-col gap-y-4 text-gray-200">
        {sideBarIcon.map((item) => (
          <div className="flex gap-2 items-center font-medium" key={item.name}>
            <item.icon size={20} />
            {extended && <p>{item.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
