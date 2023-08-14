import React from "react";
import style from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import UpButton from "./components/UpButton/UpButton";
import Navbar from "./components/Navbar/Navbar";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import SegmentPicker from "./components/SegmentPicker/SegmentPicker";
import YearLine from "./components/YearLine/YearLine";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <YearLine />
      <UpButton />
      <LoadingSpinner />
      <SegmentPicker />
      <Footer />
    </div>
  );
}

export default App;
