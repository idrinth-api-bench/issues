import React from 'react';
import {
  Lang,
} from './lang.tsx';
import languageKey from '../locales/language-key.ts';

interface CommandType {
  name: string;
  shortname: string;
  options: string;
  description: languageKey;
}

const Command = ({
  name,
  shortname,
  options,
  description,
}: CommandType,) => {
  const args: languageKey[] = options.split(' ',) as languageKey[];
  const list = args
    .map((lnkey,) => <li key={null}>
      <Lang lnkey={lnkey}/>
    </li>,);
  return <li>
    <strong>{shortname}</strong> (or <strong>{name}</strong>)
    {description}
    <ul>
      {list}
    </ul>
  </li>;
};
export default Command;
