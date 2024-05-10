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
  postfix?: languageKey;
}

const CodeUnit = ({
  text,
  level,
  children,
  language,
  prefix,
  postfix,
}: CardProps,) => <Content level={level} text={text}>
  {prefix && <p><Lang lnkey={prefix}/></p>}
  <Code language={language}>{children}</Code>
  {postfix && <p><Lang lnkey={postfix}/></p>}
</Content>;

export default CodeUnit;
