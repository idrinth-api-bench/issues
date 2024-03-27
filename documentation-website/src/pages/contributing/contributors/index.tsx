import React from 'react';
import Layout from '../../../components/layout.tsx';
import contributors from '../../../contributors.json' with {
  type: 'json'
};
import {
  Lang,
} from '../../../components/lang.tsx';
import ExternalLink from '../../../components/external-link.tsx';
import otherContributors from './non-code-contributors.json' with {
  type: 'json'
};

const Index = () => {
  const contributorsArray = Object.keys(contributors,).map(
    (username,) => ({
      username,
      ...contributors[username],
    }),
  );

  contributorsArray.sort((a, b,) => b.contributions - a.contributions,);

  const c: React.JSX.Element[] = contributorsArray.map((contributor,) => <div
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

  const oC: React.JSX.Element[] = otherContributors.map((person,) => <div
    id={person.id}
    className={'card profile'}
    key={person.name}>
    <img src={`/assets/contributors/${ person.id }.jpg`} alt={person.name}/>
    <div>
      <h2>
        <ExternalLink to={person.url} label={person.name} />
      </h2>
      <p>{person.intro}</p>
      <p>Location: {person.location}</p>
      <p>Contributions: {person.contributions}</p>
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
      <h2><Lang lnkey='contributors.none_code_contributors'/></h2>
      { oC }
      <h2><Lang lnkey='contributors.code_contributors'/></h2>
      { c }
    </section>}
    page='contributors'
    path='/contributing/contributors'
  />;
};
export default Index;
