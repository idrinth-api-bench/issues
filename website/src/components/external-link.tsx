import React from 'react';
const externalLink = ({
  to,
  label = '',
},) => <a
  href={to}
  target='_blank'
  rel='noopener'
>{label || to.replace(/^https?:\/\//ui, '',)}</a>;

export default externalLink;
