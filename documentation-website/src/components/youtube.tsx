import React from 'react';
import YoutubeContent from './youtube-content.tsx';
import Lang from './lang.tsx';
import languageKey from '../locales/language-key.ts';
import './youtube.css';

interface YoutubeType {
  children: string;
  lnkey?: languageKey;
  level?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
}
const Youtube = ({
  children,
  lnkey = 'youtube.content',
  level = 'h1',
}: YoutubeType,) => {
  const TitleTag = level as keyof JSX.IntrinsicElements;
  return <div className={'card youtube'}>
    <TitleTag>
      <Lang lnkey={lnkey}/>
    </TitleTag>
    <div>
      <YoutubeContent>{children}</YoutubeContent>
    </div>
  </div>;
};

export default Youtube;
