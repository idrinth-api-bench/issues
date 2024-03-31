import React from 'react';
import {
  Lang,
} from './lang.tsx';
import languageKey from '../locales/language-key.ts';
import {
  DEFAULT_RADIX,
  ONE,
} from '../constants.ts';

interface CommandType {
  name: string;
  shortname: string;
  children: string;
  cli?: boolean;
}

const Command = ({
  name,
  shortname,
  children,
  cli,
}: CommandType,) => {
  const args = new Array(Number.parseInt(children, DEFAULT_RADIX,),);
  const list = args
    .map((_, position,) => <li key={null}>
      <Lang
        lnkey={`command.${ shortname }.arg_${ position + ONE }` as languageKey}
      />
    </li>,);
  return <li>
    <strong>{shortname}</strong>{' '}
    (<Lang lnkey={'command.or'}/> <strong>{name}</strong>)
    <p>
      <Lang lnkey={`command.${ shortname }.description` as languageKey}/>
    </p>
    <ul>
      {list}
    </ul>
    {cli ? <p><Lang lnkey={'command.cli'}/></p> : ''}
  </li>;
};
export default Command;
