import React from 'react';
import {
  Trans,
  useTranslation,
} from 'react-i18next';

export const Lang = ({
  lnkey,
  ...props
},) => {
  const {
    t,
  } = useTranslation();
  if (! props.children) {
    props.children = lnkey;
  }
  return <Trans t={t} i18nKey={lnkey}>{props.children}</Trans>;
};
