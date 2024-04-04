import React from 'react';
import {
  LightAsync as SyntaxHighlighter,
} from 'react-syntax-highlighter';
import './code.css';

interface CodeType {
  language: string,
  children: string|string[],
}

const Code = ({
  language,
  children,
}: CodeType,) => <SyntaxHighlighter
  useInlineStyles={false}
  language={language}>{children}</SyntaxHighlighter>;

export default Code;
