import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Success = () => {
  const { isSubscribed, setIsSubscribed } = useContext(Context);

  useEffect(() => {
    setIsSubscribed(true);
    localStorage.setItem("isSubscribed", true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-500 mb-3">Subscription Successful!</h1>
        <p className="text-lg text-gray-400 mb-6">Thank you for subscribing to our service.</p>

        <Link to="/" className="btn">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
