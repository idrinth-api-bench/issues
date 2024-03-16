import React from 'react';
import {
  Trans,
  useTranslation,
} from 'react-i18next';

interface LangProps {
  lnkey: string;
}

export const Lang = ({
  lnkey,
}: LangProps,) => {
  const {
    t,
  } = useTranslation();
  return <Trans t={t} i18nKey={lnkey}>{lnkey}</Trans>;
};
