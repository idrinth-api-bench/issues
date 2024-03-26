import React from 'react';
import Layout from '../../../components/layout.tsx';
import contributors from '../../../contributors.json' with {
  type: 'json'
};
import {
  Lang,
} from '../../../components/lang.tsx';
import ExternalLink from '../../../components/external-link.tsx';
import noncodecontributors from './non-code-contributors.json' with {
  type: 'json'
};

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
    id={contributor.username}
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

  const elsTwo: React.JSX.Element[] = noncodecontributors.map((contributor,) =>
    <div id={contributor.name} className={'card profile'} key={contributor.name}>
      <div>
        <h2>
          <ExternalLink to={contributor.url} label={contributor.name} />
        </h2>
        <p>{contributor.intro}</p>
        <p>Location: {contributor.location}</p>
        <p>Contributions: {contributor.contributions}</p>
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
      <h2>Code Contributors</h2>
      { els }
      <h2>Non Code Contributors</h2>
      { elsTwo }
    </section>}
    page='contributors'
    path='/contributing/contributors'
  />;
};
export default Index;
