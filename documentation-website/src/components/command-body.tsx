import {
  DEFAULT_RADIX,
  ONE,
} from '../constants.ts';
import Lang from './lang.tsx';
import languageKey from '../locales/language-key.ts';
import React from 'react';
import Code from './code.tsx';

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
  const commands = children.split(', ',).slice(ONE,);
  const args = new Array(
    Number.parseInt(
      children.split(',',).shift() ?? '0',
      DEFAULT_RADIX,
    ),
  ).fill('',);
  const list = args
    .map((_, position,) => {
      const command = commands[position]
        ? <Code language={'bash'}>{commands[position]}</Code>
        : '';
      return <li key={`command.${ id }.${ position }`}>
        {command}
        <Lang
          lnkey={`command.${ id }.arg_${ position + ONE }` as languageKey}
        />
      </li>;
    },);
  return <div>
    <p>
      <Lang lnkey={`command.${ id }.description` as languageKey}/>
    </p>
    <ul>
      {list}
    </ul>
    {cli ? <p><Lang lnkey={'command.cli'}/></p> : ''}
  </div>;
};
export default CommandBody;
