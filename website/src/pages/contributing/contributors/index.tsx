import React from 'react';
import Layout from '../../../components/layout.tsx';
import contributors from '../../../contributors.json' with {
  type: 'json'
};
import {
  Lang,
} from '../../../components/lang.tsx';
import ExternalLink from '../../../components/external-link.tsx';
import ncContributors from '../contributors/ncContributors';

const Index = () => {
  // Convert contributors object into array
  const contributorsArray = Object.keys(contributors,).map(
    (username,) => ({
      username,
      ...contributors[username],
    }),
  );

  // Sort in descending order by number of contributions
  contributorsArray.sort((a, b,) => b.contributions - a.contributions,);

  // Create els element
  const els: React.JSX.Element[] = contributorsArray.map((contributor,) => <div
    className={'card profile'}
    key={contributor.username}>
    <img src={contributor.avatar} alt={contributor.name} />
    <div>
      <h2>
        <ExternalLink to={contributor.url} label={contributor.name} />
      </h2>
      <p>{contributor.bio}</p>
      <p>Location: {contributor.location}</p>
      <p>{contributor.contributions} contributions to master</p>
    </div>
  </div>
  ,);



  // Create NCC element
  const ncc: React.JSX.Element[] = ncContributors.map((item) => <div
    className={'card profile'}
    key={item.id}>
    <img src={'#'} alt={item.name} />
    <div>
      <h2>
        <ExternalLink to={item.url} label={item.name} />
      </h2>
      <p>{item.intro}</p>
      <p>Location: {item.location}</p>
      <p>{item.contributions} contributions to master</p>
    </div>
  </div>
  ,);

  return <Layout
    Outlet={<section>
      <div className='title-card'>
        <h1>
          <Lang lnkey='contributors.title'/>
        </h1>
        <p>
          <Lang lnkey='contributors.description'/>
        </p>
      </div>
      { els }
      { ncc }
    </section>}
    page='contributors'
    path='/contributing/contributors'
  />;
};
export default Index;
