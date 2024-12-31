import Image from "next/image";
import styles from "./page.module.css";

import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import TrainingSection from '../components/home/TrainingSection'
import EsteSection from '../components/home/EsteSection'
import CampaignSection from '../components/home/CampaignSection'
import AccessSection from '../components/home/AccessSection'
import ReviewSection from '../components/home/ReviewSection'

export default function Home() {
  return (
    <div className='wrapper'>
      <HeroSection />
      <AboutSection />
      <TrainingSection />
      <EsteSection />
      <CampaignSection />
      <ReviewSection />
      <AccessSection />
    </div>
  );
}
