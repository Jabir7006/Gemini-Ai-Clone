import { useUser } from "@clerk/clerk-react";
import React, { useContext, useEffect, useRef } from "react";
import Loading from "../components/Loading";
import PromptInput from "../components/PromptInput";
import SuggestionCard from "../components/SuggestionCard";
import { Context } from "../context/Context";
import Layout from "./../layouts/Layout";
import geminiSvg from "/google-gemini-icon.svg";

const HomePage = () => {
  const { user } = useUser();
  const { showResult, loading, messages } = useContext(Context);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const container = document.getElementById("message-container");
    if (!container) return; // Check if container exists
    // Check if container is scrollable
    if (container.scrollHeight > container.clientHeight) {
      // Show "scroll to bottom" button
      document.getElementById("scroll-to-bottom").style.display = "block";
    } else {
      // Hide "scroll to bottom" button
      document.getElementById("scroll-to-bottom").style.display = "none";
    }
    // Check if user has reached the end of messages
    if (container.scrollHeight - container.scrollTop === container.clientHeight) {
      // Hide "scroll to bottom" button
      document.getElementById("scroll-to-bottom").style.display = "none";
    }
  };

  useEffect(() => {
    handleScroll(); // Call the function after initial render
  }, [messages]);

  return (
    <Layout>
      <div className="max-w-4xl flex flex-col h-[80vh] justify-between mx-auto">
        {!showResult ? (
          <>
            <div>
              <h1 className="md:text-6xl text-[2.50rem] font-medium bg-gradient-to-r text-transparent from-blue-500 via-pink-500 to-[#D2667A] bg-clip-text max-md:leading-tight ">
                Hello {user && user.fullName ? user.fullName : "Guest"}
              </h1>

              <h2 className="text-5xl md:text-6xl text-[#444746] leading-snug">
                How can I help you today?
              </h2>
            </div>

            <SuggestionCard />
          </>
        ) : (
          <section
            id="message-container"
            className="flex flex-col gap-9 sm:gap-14 text-gray-300 min-h-[65vh] max-h-[65vh] overflow-y-scroll mx-2 sm:mx-5 md:mx-8 lg:mx-12 max-sm:pt-6"
          >
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                {/* result data */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                  <img
                    src={
                      message.role === "bot"
                        ? geminiSvg
                        : user && user.hasImage
                        ? user.imageUrl
                        : "/user.svg"
                    }
                    className={`w-7 h-7 ${
                      loading &&
                      message.role === "bot" &&
                      index === messages.length - 1 &&
                      "animate-spin-slow"
                    } rounded-full`}
                    alt="gemini logo"
                  />
                  <p className="text-gray-300">{message.role === "user" && message.text}</p>
                  {loading && message.role === "bot" && index === messages.length - 1 ? (
                    <Loading />
                  ) : (
                    <p
                      className="text-lg font-light leading-8"
                      dangerouslySetInnerHTML={{
                        __html: message.role === "bot" ? message.text : "",
                      }}
                    ></p>
                  )}
                </div>
              </React.Fragment>
            ))}
            <div ref={messagesEndRef} />
          </section>
        )}

        <PromptInput />

        {showResult && (
          <button
            id="scroll-to-bottom"
            className="fixed bottom-36 right-[38%] text-white px-4 py-2 rounded-md shadow-md"
            onClick={scrollToBottom}
            style={{ display: "none" }}
          >
            <svg
              className="h-9 w-9 text-gray-300"
              viewBox="0 0 24 24"
              fill="#1E1F20"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx={12} cy={12} r={10} /> <polyline points="8 12 12 16 16 12" />{" "}
              <line x1={12} y1={8} x2={12} y2={16} />
            </svg>
          </button>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
