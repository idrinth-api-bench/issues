import React from 'react';
import {
  Lang,
} from './lang.tsx';
import languageKey from '../locales/language-key.ts';
import {
  DEFAULT_RADIX,
  ONE,
} from '../constants.ts';
import './command.css';

interface CommandType {
  name: string;
  shortname?: string;
  children: string;
  cli?: boolean;
  deprecated?: true;
}

const Command = ({
  name,
  shortname,
  children,
  cli,
  deprecated,
}: CommandType,) => {
  const args = new Array(Number.parseInt(children, DEFAULT_RADIX,),).fill('',);
  const id = shortname || name;
  const list = args
    .map((_, position,) => <li key={`command.${ id }.${ position }`}>
      <Lang
        lnkey={`command.${ id }.arg_${ position + ONE }` as languageKey}
      />
    </li>,);
  const body = <>
    <p>
      <Lang lnkey={`command.${ id }.description` as languageKey}/>
    </p>
    <ul>
      {list}
    </ul>
    {cli ? <p><Lang lnkey={'command.cli'}/></p> : ''}
  </>;
  const className = 'command' + (deprecated ? ' deprecated' : '');
  if (! shortname) {
    return <li className={className}>
      <strong>{name}</strong>
      {body}
    </li>;
  }
  return <li className={className}>
    <strong>{shortname}</strong>{' '}
    (<Lang lnkey={'command.or'}/> <strong>{name}</strong>)
    {body}
  </li>;
};
export default Command;
