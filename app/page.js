'use client';

import Navbar from './components/Navbar';
import TutorBanner from './components/TutorBanner';
import FeaturedProfiles from './components/FeaturedProfiles';
import Experience from './components/Experience';
import CourseCategories from './components/CourseCategories';
import Premium from './components/Premium';
import StudentComponent from './components/StudentComponent';
import FeaturedSection from './components/FeaturedSection';
import StoreBanner from './components/StoreBanner';
import Contact from './components/Contact';
import CourseAd from './components/Course_ad';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import LearningBanner from './components/LearningBanner';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    overflow: auto;
  }

  .font-gilroy {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <div className="font-gilroy overflow-hidden m-0 p-0">
        <div className="flex flex-col">
          <Navbar />
          <TutorBanner />
          <LearningBanner />
          <FeaturedProfiles />
          <Experience />
          <CourseCategories />
          <CourseAd />
          <Premium />
          <StudentComponent />
          <FeaturedSection />
          <StoreBanner />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
