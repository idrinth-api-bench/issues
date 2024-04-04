import React, {
  ReactNode,
} from 'react';
import Lang from './lang.tsx';
import languageKey from '../locales/language-key.ts';

interface CardProps {
  text: languageKey;
  level: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
  children: ReactNode;
}

const Content = ({
  text,
  level,
  children,
}: CardProps,) => {
  let className = 'card';
  if (level === 'h1') {
    className = ('title-' + className).replace(/-$/u, '',);
  }
  const TitleTag = level as keyof JSX.IntrinsicElements;
  return (
    <div className={className}>
      <TitleTag>
        <Lang lnkey={text}/>
      </TitleTag>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Content;
