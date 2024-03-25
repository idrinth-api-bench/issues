import React, {
  useState,
} from 'react';
import {
  NavLink,
} from 'react-router-dom';
import {
  useTranslation,
} from 'react-i18next';
import {
  ONE,
} from '../constants';

const Faqs = () => {

  //change the length if more FAQ is added to the en.yml.
  //Add the total no. of questions.
  const faqLength = 4;
  const [
    isOpen,
    setIsOpen,
  ] = useState(Array(faqLength).fill(false));
  const {
    t,
  } = useTranslation();

  const toggleOpen = (index:number,) => {
    const newState = isOpen.map((item, i,) => i === index ? !item : item);
    setIsOpen(newState);
  };

  const renderAnswer = (content, nav?, navText?) => {
    const textContent = t(content,);
    const link = t(nav,);
    const linkText = t(navText,);

    if (textContent.includes('faq.questions')) {
      return;
    }

    const parts = textContent.split('LINK',);
    const renderedParts = parts.map((part, index) => {
      if (index === parts.length - ONE) {
        return part;
      }
      return (
        <React.Fragment key={index}>
          {part}
          <NavLink to={link!}>{linkText}</NavLink>
        </React.Fragment>
      );
    },);

    return <>{renderedParts}</>;
  };

  return (
    <div>
      {[ ...Array(faqLength)].map((_, i) => <div key={i}>
        <div onClick={() => toggleOpen(i,)} className='accordion'>
          <div className='accordion-section'>
            <div className='accordion-title'>
              <h5>
                {renderAnswer(`faq.questions.title_${ i+ONE }`)}
              </h5>
            </div>
            <div>
              <span className="accordion-icon">
                {isOpen[i] ? <i>&#x23F6;</i> : <i>&#x23F7;</i>}
              </span>
            </div>
          </div>
        </div>
        <div className={`accordion-content ${ isOpen[i] ? 'open' : '' }`}>
          <div className='accordion-content-body'>
            {
              renderAnswer(`faq.questions.description_${ i+ONE }`,
                `faq.questions.nav_${ i+ONE }`,
                `faq.questions.nav_text_${ i+ONE }`)
            }
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Faqs;
