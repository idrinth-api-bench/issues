import React from 'react';
import Lang from './lang.tsx';
import CommandBody from './command-body.tsx';
import './command.css';

interface CommandType {
  name: string;
  shortname?: string;
  children: string;
  cli?: boolean;
  deprecated?: true;
}

// eslint-disable-next-line complexity
const Command = ({
  name,
  shortname,
  children,
  cli,
  deprecated,
}: CommandType,) => {
  const className = 'card command' + (deprecated ? ' deprecated' : '');
  const id = shortname ?? name;
  if (! shortname) {
    return <div className={className}>
      <div>
        <h3>{name}</h3>
        { deprecated && <p><Lang lnkey={'command.deprecated'}/></p>}
      </div>
      <CommandBody
        id={id}
        cli={cli}
      >{children}</CommandBody>
    </div>;
  }
  return <div className={className}>
    <div>
      <h3>{shortname}</h3>
      <p>(<Lang lnkey={'command.or'}/> <strong>{name}</strong>)</p>
      {deprecated && <p><Lang lnkey={'command.deprecated'}/></p>}
    </div>
    <CommandBody
      id={id}
      cli={cli}
    >{children}</CommandBody>
  </div>;
};
export default Command;
