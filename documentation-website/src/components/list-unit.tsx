import React, {
  ReactNode,
} from 'react';
import Lang from './lang.tsx';
import languageKey from '../locales/language-key.ts';
import Content from './content.tsx';

interface CardProps {
  text: languageKey;
  level: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
  children: string|languageKey;
}

const ListUnit = ({
  text,
  level,
  children,
}: CardProps,) => {
  const GenerateContent = (): ReactNode => {
    const keys: languageKey[] = children.split(' ',) as languageKey[];
    const content = keys.map(
      (sentence,) => <li key={sentence}><Lang lnkey={sentence}/></li>,
    );
    return <ul>{content}</ul>;
  };
  return <Content level={level} text={text}>
    <GenerateContent/>
  </Content>;
};

export default ListUnit;
