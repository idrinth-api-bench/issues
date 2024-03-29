import React from 'react';
import FaqItem from './faq-item';

const Faqs = () => {
  //change the length if more FAQ is added to the en.yml.
  //Add the total no. of questions.
  const faqLength = 4;

  return (
    <div>
      {[ ...Array(faqLength,), ].map((_, i,) => <FaqItem key={`faq${ i }`} index={i} />,
      )}
    </div>
  );
};

export default Faqs;
