import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.williamstravelperks.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Unlock Exclusive Travel Benefits</Tagline>
        <HeroTitle>
          Travel More. Save More.
          <Highlight>Experience Luxury for Less.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Transform every trip into an extraordinary adventure with exclusive travel perks and VIP benefits. 
          Get access to premium hotel discounts, flight upgrades, resort credits, and exclusive experiences 
          that save you thousands while traveling in style.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            Explore Perks →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Get in touch
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
