import React from 'react';
import Head from '@uiw/react-head';
import {
  useTranslation,
} from 'react-i18next';

interface DefaultMetaProps {
  path: string;
  page: string;
}

const DefaultMeta = ({
  page,
  path,
}: DefaultMetaProps,) => {
  const {
    t,
  } = useTranslation();
  const description = t(`${ page }.meta.description`,);
  const title = t(`${ page }.meta.title`,);
  return <Head>
    <Head.Meta
      content={description}
      name='description'/>
    <Head.Title>{title} | @idrinth/api-bench</Head.Title>
    <Head.Link rel='canonical' href={'https://idrinth-api-ben.ch' + path}/>
  </Head>;
};

export default DefaultMeta;
