"use client";

import React from 'react';
import HeroSection from './HeroSection';
import { LogoFacebook, LogoInstagram, LogoLinkedin,  LogoYoutube, LogoTiktok, } from 'react-ionicons';

const SocialMedia = [
  {
    icon: LogoInstagram,
    // color: '#e4405f',
    url: 'https://www.instagram.com/warwickracing/',
  },
  {
    icon: LogoLinkedin,
    // color: '#0077b5',
    url: 'https://www.linkedin.com/company/warwick-racing/',
  },
  {
    icon: LogoYoutube,
    // color: '#ff0000',
    url: 'https://www.youtube.com/@warwick.racing',
  },
  {
    icon: LogoTiktok,
    url: 'https://www.tiktok.com/@warwickracing',
  },
]

const Footer = () => {
  return (
    <footer className=" text-white text-center">
      <HeroSection
        backgroundUrl="signup.png"
        title="FOLLOW US TO KNOW MORE"
        titleColor="[#43B02A]"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim."
        // buttonText="Sign Up"
        socialMedia={SocialMedia}
        contentCentered
      />
      <p className='p-5'>&copy; 2024 Warwick Racing. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
