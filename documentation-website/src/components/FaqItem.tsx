import React, {
  useState,
} from 'react';
import {
  ONE,
} from '../constants';
import {
  Lang,
} from './lang';

interface FaqItemProps {
    id: number;
    isOpenInitially: boolean;
}

const FaqItem = ({
  id, isOpenInitially,
}:FaqItemProps,) => {
  const [
    isOpen,
    setIsOpen,
  ] = useState(isOpenInitially,);

  const toggleOpen = () => setIsOpen(! isOpen,);

  return (
    <div key={`faq${ id }`}>
      <div onClick={toggleOpen}>
        <div className="accordion-section">
          <div>
            <h5>
              <Lang lnkey={`home.faq.questions.title_${ id + ONE }`} />
            </h5>
          </div>
          <div>
            <span>{isOpen ? <i>⏶</i> : <i>⏷</i>}</span>
          </div>
        </div>
      </div>
      <div>
        {isOpen &&
          <p>
            <Lang lnkey={`home.faq.questions.description_${ id + ONE }`} />
          </p>
        }
      </div>
    </div>
  );
};

export default FaqItem;
