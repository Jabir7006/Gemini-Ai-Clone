import React, { useContext, useState } from "react";
import Header from "../components/Header";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import { Context } from "../context/Context";

const Layout = ({ children }) => {
  const [extended, setExtended] = useState(true);
  const { chatHistory, setMessages } = useContext(Context);

  const onViewSession = (session) => {
    // Display the messages of the selected session
    setMessages(session);
  };
  return (
    <div className="flex max-sm:flex-col h-screen ">
      {/* Sidebar */}
      <div
        className={`flex-none transition-width duration-500 ease-in-out hidden sm:block ${
          extended ? "w-64" : "w-20"
        } bg-[#1E1F20] `}
      >
        <Sidebar
          extended={extended}
          setExtended={setExtended}
          chatHistory={chatHistory}
          onViewSession={onViewSession}
        />
      </div>

      {/* Mobile Sidebar */}

      <div className="sm:hidden">
        <MobileSidebar extended={extended} setExtended={setExtended} />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col flex-1 transition-all duration-300 ease-in-out">
        {/* Header */}
        <div className="bg-[#131314]">
          <Header />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-[#131314]">
          <div className="container mx-auto px-4 py-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

// import React, { useState } from "react";
// import Header from "../components/Header";
// import MobileSidebar from "../components/MobileSidebar";
// import Sidebar from "../components/Sidebar";

// const Layout = ({ children }) => {
//   const [extended, setExtended] = useState(true);

//   return (
//     <div className="flex flex-col h-screen overflow-hidden">
//       {/* Header */}
//       <div className="">
//         <div className="bg-[#131314]">
//           <Header />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <div
//           className={`transition-width duration-500 ease-in-out hidden sm:block ${
//             extended ? "w-64" : "w-20"
//           } bg-[#1E1F20] h-screen`}
//         >
//           <Sidebar extended={extended} setExtended={setExtended} />
//         </div>

//         {/* Mobile Sidebar */}
//         <div className="sm:hidden">
//           <MobileSidebar extended={extended} setExtended={setExtended} />
//         </div>

//         {/* Content Wrapper */}
//         <div className="flex flex-col flex-1 overflow-y-auto w-full">
//           <div className="container mx-auto px-4 py-6 bg-[#131314]">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
