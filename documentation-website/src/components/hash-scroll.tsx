// based on https://github.com/ncoughlin/scroll-to-hash-element
import {
  useLayoutEffect, useRef,
} from 'react';
import {
  useLocation,
} from 'react-router-dom';
import {
  ONE,
  SCROLL_WAIT_TIME,
} from '../constants.ts';

const ScrollToHashElement = () => {
  const location = useLocation();
  const hasScrolled = useRef(false,);
  const process = (isSmooth: boolean = true,) => {
    hasScrolled.current = true;
    const {
      hash,
    } = location;
    if (! hash) {
      return;
    }
    document.getElementById(hash.substring(ONE,),)?.scrollIntoView({
      behavior: isSmooth ? 'smooth' : 'instant',
      inline: 'nearest',
    },);
  };
  useLayoutEffect(process, [ location, ],);
  setTimeout(
    () => {
      if (! hasScrolled) {
        process(false,);
      }
    },
    SCROLL_WAIT_TIME,
  );
  return null;
};

export default ScrollToHashElement;
