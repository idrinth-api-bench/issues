import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
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
