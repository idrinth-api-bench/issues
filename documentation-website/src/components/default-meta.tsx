import React, {
  lazy,
  Suspense,
} from 'react';
import Head from '@uiw/react-head';
import t from './t.ts';

interface DefaultMetaProps {
  path: string;
  page: string;
}

const DefaultMeta = ({
  page,
  path,
}: DefaultMetaProps,) => {
  const dKey = `${ page }.meta.description`;
  const tKey = `${ page }.meta.title`;
  const LE = lazy(async() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const description = await t(dKey,);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const title = await t(tKey,);
    return {
      default: () => <Head>
        <Head.Meta
          content={description}
          name='description'/>
        <Head.Title>{title} | @idrinth-api-bench/api-bench</Head.Title>
        <Head.Link rel='canonical' href={'https://idrinth-api-ben.ch' + path}/>
      </Head>,
    };
  },);
  return <Suspense>
    <LE/>
  </Suspense>;
};

export default DefaultMeta;
