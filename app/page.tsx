import Image from "next/image";
import styles from "./page.module.css";

import Header from '../components/common/Header';
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import TrainingSection from '../components/home/TrainingSection'
import EsteSection from '../components/home/EsteSection'
import CampaignSection from '../components/home/CampaignSection'
import InstagramSection from '../components/home/InstagramSection'
import AccessSection from '../components/home/AccessSection'
import ReviewSection from '../components/home/ReviewSection'
import Footer from '../components/common/Footer'

export default function Home() {
  return (
    <div className='wrapper'>
      <Header />
      <HeroSection />
      <AboutSection />
      <TrainingSection />
      <EsteSection />
      <CampaignSection />
      <ReviewSection />
      <InstagramSection />
      <AccessSection />
      <Footer />
    </div>
  );
}
