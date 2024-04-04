import {
  Lang,
} from './lang.tsx';
import {
  FiExternalLink,
} from 'react-icons/fi';
import React from 'react';

interface YoutubeLinkType {
  children: string;
}

const YoutubeLink = ({
  children,
}: YoutubeLinkType,) => <a
  href={`https://youtu.be/${ children }`}
  target='_blank'
  rel='noreferrer'
>
  <Lang lnkey={'youtube.on'}/>
  <FiExternalLink className="external-link-icon"/>
</a>;

export default YoutubeLink;
