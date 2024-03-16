import React from 'react';
import {
  Trans,
  useTranslation,
} from 'react-i18next';

interface LangProps {
  lnkey: string;
  children?: string;
}

export const Lang = ({
  lnkey,
  ...props
}: LangProps,) => {
  const {
    t,
  } = useTranslation();
  if (! props.children) {
    props.children = lnkey;
  }
  return <Trans t={t} i18nKey={lnkey}>{props.children}</Trans>;
};
