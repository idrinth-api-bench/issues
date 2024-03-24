import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FAQ } from '../constants';

interface AccordionProps {
  title: string;
  answer: string;
  link?: string;
  linkText?: string; 
}

const Faqs = () => {
  return (
    <div>
      {
        FAQ.map((faq:AccordionProps,index:number)=>(
         <Accordion key={index} title={faq.title} answer={faq.answer} link={faq.link} linkText={faq.linkText}/>
        ))
      }
    </div>
  )
}

const Accordion = ({ title,answer,link,linkText }:AccordionProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleOpen = () => setIsOpen(!isOpen);
   
   const renderAnswer = (text:string,link?:string,linkText?:string) => {
    const parts = text.split("LINK");
    const renderedParts = parts.map((part, index) => {
      if (index === parts.length - 1) return part;
      return (
        <React.Fragment key={index}>
          {part}
          <NavLink to={link!}>{linkText}</NavLink>
        </React.Fragment>
      );
    });

    return <>{renderedParts}</>;
  };

   return (
     <div >
      <div onClick={toggleOpen} className='accordion'>
        <div className='accordion-section'>
          <div className='accordion-title' >
            <h5>
              {title} 
            </h5>
          </div>
            <div>
                <span className="accordion-icon">{isOpen ? <i>&#x23F7;</i> : <i>&#x23F6;</i>}</span>
            </div>
        </div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
          <p className='accordion-content-body'>
            {renderAnswer(answer,link,linkText)}
          </p>
       </div>
     </div>
   );
 };

export default Faqs