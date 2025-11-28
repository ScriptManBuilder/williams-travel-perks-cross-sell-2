import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What travel perks and benefits are included?',
      answer: 'Members enjoy luxury hotel discounts up to 70%, complimentary flight upgrades, resort credits up to $500 per stay, VIP lounge access, priority booking, 24/7 concierge service, and exclusive access to private tours and events worldwide.'
    },
    {
      question: 'How do I start using my travel perks?',
      answer: 'Simply enroll and receive instant access to our member portal. Browse available properties, select your destination, and book directly through our platform. Your exclusive rates and perks are automatically applied at checkout.'
    },
    {
      question: 'Are there any blackout dates or restrictions?',
      answer: 'Most properties have year-round availability with minimal restrictions. Some peak season dates may have limited availability, but you\'ll always see real-time inventory and pricing when searching. No hidden fees or surprise restrictions.'
    },
    {
      question: 'Can I share my membership benefits?',
      answer: 'Yes! You can book travel for family members and friends using your membership benefits. Some perks like concierge service and booking privileges extend to your entire travel party when you make the reservation.'
    },
    {
      question: 'What destinations are available?',
      answer: 'We partner with over 5,000 luxury properties worldwide including destinations across North America, Europe, Asia, Caribbean, South Pacific, and more. From beachfront resorts to mountain retreats and urban luxury hotels.'
    },
    {
      question: 'How much can I realistically save?',
      answer: 'Members typically save $2,000-$5,000 annually depending on travel frequency. A single luxury hotel stay can save you $500-$1,000, and flight upgrades save $800+ per international trip. The membership pays for itself with just 1-2 trips per year.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Everything you need to know about our exclusive travel perks program
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
