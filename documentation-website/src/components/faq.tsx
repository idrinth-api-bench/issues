import React from 'react';
import FaqItem from './faq-item';

const Faqs = () => <div>
  <FaqItem key={'faq0'} index={0} />
  <FaqItem key={'faq1'} index={1} />
  <FaqItem key={'faq2'} index={2} />
  <FaqItem key={'faq4'} index={3} />
</div>;

export default Faqs;
