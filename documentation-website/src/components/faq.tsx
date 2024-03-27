import React, {
  useState,
} from 'react';
import {
  ONE,
} from '../constants';
import {
  Lang,
} from './lang';

const Faqs = () => {

  //change the length if more FAQ is added to the en.yml.
  //Add the total no. of questions.
  const faqLength = 4;
  const [
    isOpen,
    setIsOpen,
  ] = useState(Array(faqLength,).fill(false,),);

  const toggleOpen = (index: number,) => {
    const newState = [ ...isOpen, ];
    newState[index] = ! newState[index];
    setIsOpen(newState,);
  };

  return (
    <div>
      {[ ...Array(faqLength,), ].map((_, i,) => <div key={`faq${ i }`}>
        <div onClick={() => toggleOpen(i,)}>
          <div className='accordion-section'>
            <div>
              <h5>
                <Lang lnkey={`home.faq.questions.title_${ i+ONE }`} />
              </h5>
            </div>
            <div>
              <span>
                {isOpen[i] ? <i>&#x23F6;</i> : <i>&#x23F7;</i>}
              </span>
            </div>
          </div>
        </div>
        <div >
          {isOpen[i] &&
          <p>
            {
              <Lang lnkey={`home.faq.questions.description_${ i+ONE }`} />
            }
          </p>
          }
        </div>
      </div>,
      )}
    </div>
  );
};

export default Faqs;
