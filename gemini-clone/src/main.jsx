import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/Context.jsx";
import "./index.css";
// Import clerk publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{ baseTheme: dark }}>
      <App />
    </ClerkProvider>
  </ContextProvider>
);
