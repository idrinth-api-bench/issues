import React from 'react';

interface SocialLinkType {
  to: string;
  label: string;
}
const SocialLink = ({
  to,
  label,
}: SocialLinkType,) => <li id={label}>
  <a
    href={to}
    target='_blank'
    rel='noreferrer'
    title={label}
  >
    <img alt={label} src={'../../public/assets/' + label + '.svg'}/>
  </a>
</li>;
export default SocialLink;
