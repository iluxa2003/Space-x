import React from 'react';
import style from './MainPage.module.scss';
import Footer from '../components/Footer/Footer';
import UpButton from '../components/UpButton/UpButton';
import Navbar from '../components/Navbar/Navbar';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import SegmentPicker from '../components/SegmentPicker/SegmentPicker';
import YearLine from '../components/YearLine/YearLine';
import LaunchListItem from '../components/LaunchListItem/LaunchListItem';
import rocket from '../img/testRocket.png';
import IconButton from '../components/IconButton/IconButton';
import ArrowUp from '../icons/arrowUp.svg';

export default function MainPage() {
  return (
    <div className={style.root}>
      <Navbar />
      <YearLine year={2022} />
      <div className={style.testContainerSmall}>
        <LaunchListItem
          status="upcoming"
          launchId="1223"
          date="2002"
          image={rocket}
        />
        <LaunchListItem status="upcoming" launchId="1223" date="2002" />
      </div>
      <div className={style.testContainerBig}>
        <LaunchListItem
          status="failed"
          launchId="1223"
          date="2002"
          image={rocket}
        />
        <LaunchListItem status="success" launchId="1223" date="2002" />
      </div>
      <UpButton />
      <IconButton variant="primary" onClick={() => {}}>
        <ArrowUp />
      </IconButton>
      <LoadingSpinner />
      <SegmentPicker value="1" onChange={() => {}} />
      <Footer />
    </div>
  );
}
