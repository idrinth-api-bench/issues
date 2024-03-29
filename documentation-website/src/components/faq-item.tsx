import React, {
  useState,
} from 'react';
import {
  ONE,
} from '../constants';
import {
  Lang,
} from './lang';
import './faq-item.css';

const FaqItem = ({
  index,
}: { index: number },) => {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false,);

  const toggleOpen = () => {
    setIsOpen(! isOpen,);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>,) => {
    if (e.key === 'Enter') {
      toggleOpen();
    }
  };

  return <div className={'faq-item'}>
    <div
      onClick={() => toggleOpen()}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <div className="accordion-section">
        <h5>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <Lang lnkey={`home.faq.questions.title_${ index + ONE }`} />
          }
        </h5>
        {isOpen ?
          <span className="up-arrow"></span>
          :
          <span className="down-arrow"></span>
        }
      </div>
    </div>
    {isOpen &&
      <p>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          <Lang lnkey={`home.faq.questions.description_${ index + ONE }`} />
        }
      </p>
    }
  </div>;
};

export default FaqItem;
