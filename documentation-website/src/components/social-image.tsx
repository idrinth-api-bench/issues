import React, {
  lazy,
  Suspense,
} from 'react';
import t from './t.ts';
import languageKey from '../locales/language-key.ts';

interface SocialImageType {
  label: string,
}

const SocialImage = ({
  label,
}: SocialImageType,) => {
  const src = '/assets/socials/' + label + '.svg';
  const style = {
    maxHeight: '1em',
  };
  const EL = lazy(async() => {
    const alt = await t(`socials.${ label }.alt` as languageKey,);
    return {
      default: () => <img
        alt={alt}
        style={style}
        src={src}
      />,
    };
  },);
  return <Suspense fallback={<img
    alt={''}
    style={style}
    src={src}
  />}><EL/></Suspense>;
};

export default SocialImage;
