import React from 'react';
import {
  FiExternalLink,
} from 'react-icons/fi';
const ExternalLink = ({
  to,
  label = '',
},) => <a
  className="external-link"
  href={to}
  target='_blank'
  rel='noreferrer'
>
  {label || to.replace(/^https?:\/\//ui, '',)}
  <FiExternalLink className="external-link-icon"/>
</a>;

export default ExternalLink;
