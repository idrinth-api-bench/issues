import React, {
  lazy,
  Suspense,
} from 'react';
import t from './t.ts';
import languageKey from '../locales/language-key.ts';
import {
  INITIAL_ZERO,
} from '../constants.ts';

interface SocialLinkType {
  to: string|string[];
  label: string;
  logo?: string;
}
const SocialLink = ({
  to,
  label,
  logo,
}: SocialLinkType,) => {
  if (Array.isArray(to,)) {
    const EL = lazy(async() => {
      const alt = await t(`socials.${ label }.alt` as languageKey,);
      const items: React.JSX.Element[] = [];
      let pos = INITIAL_ZERO;
      for (const url of to) {
        // eslint-disable-next-line no-await-in-loop
        const title = await t(
          `socials.${ label }.title${ pos }` as languageKey,
        );
        // eslint-disable-next-line no-await-in-loop
        const text = await t(`socials.${ label }.text${ pos }` as languageKey,);
        items.push(<li key={label + pos}>
          <a
            href={url}
            rel='noreferrer'
            target='_blank'
            title={title}
          >{text}</a>
        </li>,);
        pos ++;
      }
      return {
        default: () => <span
          className="external-link"
        >
          <img alt={alt} src={'/assets/socials/' + (logo ?? label) + '.svg'}/>
          <ul>{items}</ul>
        </span>,
      };
    },);
    return <li id={label} key={label}>
      <Suspense fallback={<span
        className="external-link"
      >
        <img alt={''} src={'/assets/socials/' + (logo ?? label) + '.svg'}/>
      </span>}><EL/></Suspense>
    </li>;
  }
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
        <img alt={alt} src={'/assets/socials/' + (logo ?? label) + '.svg'}/>
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
      <img alt={''} src={'/assets/socials/' + (logo ?? label) + '.svg'}/>
    </a>}><EL/></Suspense>
  </li>;
};
export default SocialLink;
