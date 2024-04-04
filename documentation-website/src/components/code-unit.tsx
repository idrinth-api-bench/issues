import React from 'react';
import languageKey from '../locales/language-key.ts';
import Content from './content.tsx';
import Code from './code.tsx';
import Lang from './lang.tsx';

interface CardProps {
  text: languageKey;
  level: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
  children: string;
  language: 'bash' | 'typescript' | 'markdown';
  prefix?: languageKey;
}

const CodeUnit = ({
  text,
  level,
  children,
  language,
  prefix,
}: CardProps,) => {
  if (prefix) {
    return <Content level={level} text={text}>
      <p><Lang lnkey={prefix}/></p>
      <Code language={language}>{children}</Code>
    </Content>;
  }
  return <Content level={level} text={text}>
    <Code language={language}>{children}</Code>
  </Content>;
};

export default CodeUnit;
