import React from 'react';
const mailLink = ({
  to,
}) => <a
  href={'mailto:' + to}
  itemProp='email'
>{to}</a>;

export default mailLink;
