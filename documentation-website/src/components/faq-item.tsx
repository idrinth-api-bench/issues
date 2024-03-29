import React, {
    useState,
  } from 'react';
  import {
    ONE,
  } from '../constants';
  import {
    Lang,
  } from './lang';
  
  const FaqItem = ({index} : {index: number}) => {

    const [
      isOpen,
      setIsOpen,
    ] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <>
          <div onClick={() => toggleOpen()}>
            <div className='accordion-section'>
              <div>
                <h5>
                  {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <Lang lnkey={`home.faq.questions.title_${ index+ONE }`} />
                  }
                </h5>
              </div>
              <div>
                <span>
                  {isOpen ? <i>&#x23F6;</i> : <i>&#x23F7;</i>}
                </span>
              </div>
            </div>
          </div>
          <div >
            {isOpen &&
            <p>
              {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <Lang lnkey={`home.faq.questions.description_${ index+ONE }`} />
              }
            </p>
            }
          </div>
        </>
    );
  };
  
  export default FaqItem;
  