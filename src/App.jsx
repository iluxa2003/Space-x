import React from 'react';
import style from './App.module.scss';
import Footer from './components/Footer/Footer';
import UpButton from './components/UpButton/UpButton';
import Navbar from './components/Navbar/Navbar';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import SegmentPicker from './components/SegmentPicker/SegmentPicker';
import YearLine from './components/YearLine/YearLine';
import LaunchListItem from './components/LaunchListItem/LaunchListItem';
import Rocket from './icons/testIcon.svg';

function App() {
  return (
    <div className={style.root}>
      <Navbar />
      <YearLine />
      <LaunchListItem image={<Rocket />} />
      <LaunchListItem status="upcoming" />
      <UpButton />
      <LoadingSpinner />
      <SegmentPicker />
      <Footer />
    </div>
  );
}

export default App;
