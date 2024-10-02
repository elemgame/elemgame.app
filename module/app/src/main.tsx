import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Main component now only renders the App component
const Main = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Render the Main component to the root element
ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
