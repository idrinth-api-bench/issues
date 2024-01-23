import React from 'react';
import Layout from '../../../components/layout.tsx';
import {
  Lang,
} from '../../../components/lang.tsx';
import bjoernbuettner from '../../../assets/sponsors/bjoernbuettner.png';
import jungwild from '../../../assets/sponsors/jungwild.png'

const Index = () => {
  return <Layout
    Outlet={<section>
      <div className='title-card'>
        <h1>
          <Lang lnkey='sponsors.title'/>
        </h1>
        <p>
          <Lang lnkey='sponsors.description'/>
        </p>
      </div>
      <div className={'card sponsor'}>
        <img
          src={bjoernbuettner}
          alt={'Bjoern Büttner\'s Backing'}
        />
        <div>
          <h2>
            <a
              href='https://bjoern-buettner.me'
              target={'_blank'}
              rel={'noopener'}
            >
              Björn Büttner
            </a>
          </h2>
          <p><Lang lnkey='sponsors.bjoernbuettner.intro'/></p>
          <p><Lang lnkey='sponsors.bjoernbuettner.sponsoring'/></p>
        </div>
      </div>
      <div className={'card sponsor'}>
      <img
          src={jungwild}
          alt={'JUNGWILD'}
        />
        <div>
          <h2>
            <a
              href='https://jungwild.io'
              target={'_blank'}
              rel={'noopener'}
            >
              JUNGWILD
            </a>
          </h2>
          <p><Lang lnkey='sponsors.jungwild.intro'/></p>
          <p><Lang lnkey='sponsors.jungwild.sponsoring'/></p>
        </div>
      </div>
    </section>}
    page='sponsors'
    path='/contributing/sponsors'
  />;
};
export default Index;
