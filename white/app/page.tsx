import Image from "next/image";
import styles from "./page.module.css";

import Header from '../components/common/Header';
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import TrainingSection from '../components/home/TrainingSection'
import EsteSection from '../components/home/EsteSection'
import ServicesSection from '../components/home/ServiceSection'
import CampaignSection from '../components/home/CampaignSection'
import Footer from '../components/common/Footer'

export default function Home() {
  return (
    <div className='wrapper'>
      <Header />
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <TrainingSection></TrainingSection>
      <EsteSection></EsteSection>
      <ServicesSection></ServicesSection>
      <CampaignSection></CampaignSection>
      <Footer></Footer>
    </div>
  );
}
