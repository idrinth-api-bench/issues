import React, {
  lazy,
  Suspense,
} from 'react';
import {
  FiExternalLink,
} from 'react-icons/fi';
import t from './t.ts';
import languageKey from '../locales/language-key.ts';

interface SocialLinkType {
  to: string;
  label: string;
  logo?: string;
}
const SocialLink = ({
  to,
  label,
  logo,
}: SocialLinkType,) => {
  const EL = lazy(async() => {
    const title = await t(`socials.${ label }.title` as languageKey,);
    const alt = await t(`socials.${ label }.alt` as languageKey,);
    return {
      default: () => <a
        href={to}
        className="external-link"
        target='_blank'
        rel='noreferrer'
        title={title}
      >
        <img alt={alt} src={'/assets/' + (logo ?? label) + '.svg'}/>
        <FiExternalLink className="external-link-icon"/>
      </a>,
    };
  },);
  return <li id={label}>
    <Suspense fallback={<a
      href={to}
      className="external-link"
      target='_blank'
      rel='noreferrer'
    >
      <img alt={''} src={'/assets/' + (logo ?? label) + '.svg'}/>
      <FiExternalLink className="external-link-icon" />
    </a>}><EL/></Suspense>
  </li>;
};
export default SocialLink;
