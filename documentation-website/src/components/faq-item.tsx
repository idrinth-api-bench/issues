import React, {
  useState,
} from 'react';
import {
  ONE,
} from '../constants';
import Lang from './lang';
import './faq-item.scss';

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

  return (
    <li className={ 'faq-item' }>
      <button tabIndex={ index + ONE } onClick={ () => toggleOpen() }>
        <div className="accordion-section">
          <h2>
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              <Lang lnkey={ `faq.questions.title_${ index + ONE }` }/>
            }
          </h2>
          { isOpen ?
            <span className="up-arrow"></span>
            :
            <span className="down-arrow"></span>
          }
        </div>
        { isOpen &&
          <p>
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              <Lang lnkey={ `faq.questions.description_${ index + ONE }` }/>
            }
          </p>
        }
      </button>
    </li>
  );
};

export default FaqItem;
