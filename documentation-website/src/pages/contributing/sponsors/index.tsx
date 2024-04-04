import React from 'react';
import Layout from '../../../components/layout.tsx';
import bjoernbuettner from '../../../assets/sponsors/bjoernbuettner.png';
import jungwild from '../../../assets/sponsors/jungwild.png';
import ContentUnit from '../../../components/content-unit.tsx';
import Sponsor from '../../../components/sponsor.tsx';

const Index = () => <Layout
  page='sponsors'
  path='/contributing/sponsors'
>
  <ContentUnit
    level={'h1'}
    text={'sponsors.title'}
  >sponsors.description</ContentUnit>
  <Sponsor
    img={<img
      src={bjoernbuettner}
      alt={'Björn Büttner\'s Backing'}
    />}
    to={'https://bjoern-buettner.me'}
    lnkey={'bjoernbuettner'}
    label={'Björn Büttner'}
  />
  <Sponsor
    img={<img
      src={jungwild}
      alt={'JUNGWILD'}
    />}
    to={'https://bjoern-buettner.me'}
    lnkey={'jungwild'}
    label={'JUNGWILD'}
  />
</Layout>;
export default Index;
