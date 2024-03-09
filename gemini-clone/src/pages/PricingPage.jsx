import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const stripePromise = loadStripe(
  "pk_test_51Oofq9AO6bU5Xnbp5ndP2Rf38VjDjxNUhQCCMVMKbKa7K1Wmy5XhqkVna1ZZ2Td9Vs10yFu3r3v90jg3nRPkXCrv00UYXMRm1k"
);

const PricingPage = () => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1OragzAO6bU5Xnbp8MJzUFjN", quantity: 1 }],
      mode: "subscription",
      successUrl: "https://gemini-ai-clone.vercel.app/success",
      cancelUrl: "https://gemini-ai-clone.vercel.app/",
    });

    if (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-white min-h-screen overflow-y-scroll gemini-advanced">
      <div className="max-w-3xl mx-auto py-12">
        <div className="w-80 flex justify-center items-center mx-auto">
          <img src="/gemini-advance-photo.svg" className="w- h-full" alt="" />
        </div>

        <div className="text-center mt-6">
          <h3 className="text-2xl text-center  text-black font-light">
            Get Gemini Advanced and more with a Google One AI Premium plan
          </h3>

          <p className="pt-4 text-gray-600 text-lg">
            <span className="line-through">US$19.99</span> US$0 for 2 months,
          </p>
          <p className=" text-gray-600 text-lg">US$19.99/month thereafter</p>
        </div>

        <div className="pt-14 max-w-xl mx-auto">
          <p className="text-gray-700 font-sans mb-3">Gemini Advanced</p>

          <ul>
            <li className="flex items-center gap-6 py-2">
              <FaCheck size={20} className="text-blue-600" />
              <p className="text-gray-600 font-sans border-b border-black border-dotted">
                With our most capable AI model, 1.0 Ultra
              </p>
            </li>
            <li className="flex items-center gap-6 py-2">
              <FaCheck size={20} className="text-blue-600" />
              <p className="text-gray-600 font-sans border-b border-black border-dotted">
                State-of-the-art performance
              </p>
            </li>
            <li className="flex items-center gap-6 py-2">
              <FaCheck size={20} className="text-blue-600" />
              <p className="text-gray-600 font-sans border-b border-black border-dotted">
                Designed for highly complex tasks
              </p>
            </li>

            <p className="text-gray-700 font-sans py-5">
              Also included in this Google One subscription
            </p>

            <li className="flex items-center gap-6 py-2">
              <FaCheck size={20} className="text-blue-600" />
              <p className="text-gray-600 font-sans border-b border-black border-dotted">
                Gemini in Gmail, Docs and more
              </p>
            </li>

            <li className="flex items-center gap-6 py-2">
              <FaCheck size={20} className="text-blue-600" />
              <p className="text-gray-600 font-sans border-b border-black border-dotted">
                2 TB of storage
              </p>
            </li>

            <li className="flex items-center gap-6 py-2">
              <FaCheck size={20} className="text-blue-600" />
              <p className="text-gray-600 font-sans border-b border-black border-dotted">
                Other Google One Premium benefits
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 w-full h-32 border-t-2 p-4 border-gray-200 text-center bg-white">
        <button
          onClick={handleCheckout}
          to="/payment"
          className="px-5 rounded bg-blue-600 py-2 text-white"
        >
          Start trial
        </button>

        <p className="text-gray-800 text-xs font-sans py-3 max-w-6xl mx-auto">
          Cancel at any time. By subscribing, you agree to the terms for Google One, gen AI and
          offers. See <span className="text-blue-600 underline">how Google handles data.</span>{" "}
          Gemini Advanced with 1.0 Ultra and Gemini in Gmail, Docs and more are only available in
          English and for those aged 18+.
        </p>
      </div>
    </section>
  );
};

export default PricingPage;
