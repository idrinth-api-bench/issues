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
  children: string[]|string;
}

const hasWhitespace = /\s/u;

const ContentUnit = ({
  titleText,
  titleLevel,
  sideMode = true,
  children,
}: CardProps,) => {
  const TitleTag = `h${ titleLevel }` as keyof JSX.IntrinsicElements;
  const generateContent = (): ReactNode => {
    if (! Array.isArray(children,)) {
      children = hasWhitespace.test(children,)
        ? children.split(' ',)
        : [ children, ];
    }
    const content = children.map(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
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
