import React from 'react';
import {
  Trans,
  useTranslation,
} from 'react-i18next';

export const Lang = ({
  children, lnkey,
},) => {
  const {
    t,
  } = useTranslation();
  if (! children) {
    children = lnkey;
  }
  return <Trans t={t} i18nKey={lnkey}>{children}</Trans>;
};
