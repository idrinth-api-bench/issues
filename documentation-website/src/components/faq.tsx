import FaqItem from './FaqItem';
import React from 'react';
const Faqs = () => {
  //change the length if more FAQ is added to the en.yml.
  //Add the total no. of questions.
  const faqLength = 4;

  return (
    <div>
      {[ ...Array(faqLength,), ].map(function(_, i,) {
        return <FaqItem key={`faq${ i }`} id={i} isOpenInitially={false}/>;
      },)
      }
    </div>
  );
};

export default Faqs;
