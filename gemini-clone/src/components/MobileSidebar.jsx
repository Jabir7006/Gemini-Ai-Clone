import React, { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { sideBarIcon } from "../constant";
import { Context } from "../context/Context";

const MobileSidebar = ({ extended, setExtended }) => {
  const { prevPrompts, handleSend, setRecentPrompt, newChat } = useContext(Context);

  const loadPrevPrompts = async (prompt) => {
    setRecentPrompt(prompt);
    await handleSend(prompt);
  };
  return (
    <div className="drawer relative z-20 ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="p-6 flex flex-col justify-between h-full bg-[#1E1F20] text-gray-300 w-[70%]">
          {/* top section */}

          <div className="flex flex-col gap-y-1 ">
            <button
              className={`bg-[#1A1A1C] flex gap-2 w-full rounded-full hover:bg-[#2C2C2E] p-3`}
              onClick={() => newChat()}
            >
              <GoPlus size={25} />
              {extended && <p>New chat</p>}
            </button>

            {/* middle section */}

            {extended && (
              <div>
                <h6 className=" text-sm font-semibold mb-2 pt-8">Recent</h6>

                <div className="flex flex-col gap-y-2 max-h-[250px] overflow-y-scroll">
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
      </div>
    </div>
  );
};

export default MobileSidebar;
