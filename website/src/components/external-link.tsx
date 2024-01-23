import React from 'react';
const externalLink = ({
  to,
  label = undefined,
}) => <a
  href={to}
  target='_blank'
  rel='noopener'
>{label || to.replace(/^https?:\/\//, '')}</a>;

export default externalLink;
