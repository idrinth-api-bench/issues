import React, {
  ReactNode,
} from 'react';
import {
  Lang,
} from './lang.tsx';
import {
  ONE,
} from '../constants.ts';
import languageKey from '../locales/language-key.ts';

interface CardProps {
  titleText: languageKey;
  titleLevel: number;
  sideMode?: boolean;
  children: string;
}

const ContentUnit = ({
  titleText,
  titleLevel,
  sideMode = true,
  children,
}: CardProps,) => {
  const TitleTag = `h${ titleLevel }` as keyof JSX.IntrinsicElements;
  const generateContent = (): ReactNode => {
    const keys: languageKey[] = children.split(' ',) as languageKey[];
    const content = keys.map(
      (sentence,) => <p key={null}><Lang lnkey={sentence}/></p>,
    );
    return <div>{content}</div>;
  };
  let className = '';
  if (sideMode) {
    className = 'card';
  }
  if (titleLevel === ONE) {
    className = ('title-' + className).replace(/-$/u, '',);
  }
  return (
    <div className={className}>
      <TitleTag>
        <Lang lnkey={titleText}/>
      </TitleTag>
      {generateContent()}
    </div>
  );
};

export default ContentUnit;
