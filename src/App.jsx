import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import UpButton from "./components/UpButton/UpButton";
import Navbar from "./components/Navbar/Navbar";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  return (
    <div className="App">
      <Navbar />

      <UpButton />
      <LoadingSpinner />
      <Footer />
    </div>
  );
}

export default App;
