import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Average Annual Savings',
      description: 'Members save thousands annually on luxury travel experiences with exclusive perks and benefits',
      value: '$3,200',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Hotel Discount Rate',
      description: 'Access exclusive rates at premium hotels and resorts worldwide, dramatically below standard pricing',
      value: '70%',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Members rate their travel experiences as exceptional, with consistent 5-star reviews',
      value: '98%',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'Global Properties',
      description: 'Access to luxury hotels, resorts, and vacation properties across the world',
      value: '5,000+',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Travel in Style, Save Like a Pro</StatsSectionTitle>
        <StatsSectionDescription>
          See how our exclusive travel perks program delivers extraordinary value and unforgettable experiences.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
