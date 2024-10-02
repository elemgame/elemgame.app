import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import loadimg from "./assets/image/background.jpg";

// Styles
import "./assets/css/load.css";
import "./assets/css/style.css";

// import "./assets/css/vendor/bootstrap/css/bootstrap.min.css";
// import "./assets/css/vendor/bootstrap-icons/bootstrap-icons.css";
// import "./assets/css/vendor/boxicons/css/boxicons.min.css";
// import "./assets/css/vendor/glightbox/css/glightbox.min.css";
// import "./assets/css/vendor/remixicon/remixicon.css";
// import "./assets/css/vendor/swiper/swiper-bundle.min.css";

// Loading screen with rotating image and background image
const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="rotating-image-container">
        <img src={loadimg} alt="Rotating" className="rotating-image" />
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
