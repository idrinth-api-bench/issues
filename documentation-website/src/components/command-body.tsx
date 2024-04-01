import {DEFAULT_RADIX, ONE} from "../constants.ts";
import {
  Lang,
} from './lang.tsx';
import languageKey from '../locales/language-key.ts';
import React from 'react';

interface CommandBodyType {
  id: string;
  children: string;
  cli?: boolean;
}

const CommandBody = ({
  id,
  children,
  cli,
}: CommandBodyType,) => {
  const args = new Array(Number.parseInt(children, DEFAULT_RADIX,),).fill('',);
  const list = args
    .map((_, position,) => <li key={`command.${ id }.${ position }`}>
      <Lang
        lnkey={`command.${ id }.arg_${ position + ONE }` as languageKey}
      />
    </li>,);
  return <div>
    <p>
      <Lang lnkey={`command.${ id }.description` as languageKey}/>
    </p>
    <ul>
      {list}
    </ul>
    {cli ? <p><Lang lnkey={'command.cli'}/></p> : ''}
  </div>;
}
export default CommandBody;
