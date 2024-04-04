import React from 'react';
import {
  Light as SyntaxHighlighter,
} from 'react-syntax-highlighter';
import './code.css';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
// eslint-disable-next-line max-len
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
// eslint-disable-next-line max-len
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';

SyntaxHighlighter.registerLanguage('typescript', typescript,);
SyntaxHighlighter.registerLanguage('bash', bash,);
SyntaxHighlighter.registerLanguage('markdown', markdown,);

interface CodeType {
  language: 'bash'|'typescript'|'markdown',
  children: string|string[],
}

const Code = ({
  language,
  children,
}: CodeType,) => <SyntaxHighlighter
  useInlineStyles={false}
  language={language}>{children}</SyntaxHighlighter>;

export default Code;
