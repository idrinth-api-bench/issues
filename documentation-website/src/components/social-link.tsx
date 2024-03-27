import React from 'react';
import {
  FiExternalLink,
} from 'react-icons/fi';

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
    className="external-link"
    target='_blank'
    rel='noreferrer'
    title={label}
  >
    <img alt={label} src={'/assets/' + label + '.svg'}/>
    <FiExternalLink className="external-link-icon" />
  </a>
</li>;
export default SocialLink;
