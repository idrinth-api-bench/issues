import React from 'react';
import Layout from '../../../components/layout.tsx';
import codeContributors from '../../../contributors.json' with {
  type: 'json'
};
import Lang from '../../../components/lang.tsx';
import otherContributors from './non-code-contributors.json' with {
  type: 'json'
};
import Contributor from '../../../components/contributor.tsx';

const Index = () => {
  const contributors = Object.keys(codeContributors,).map(
    (username,) => ({
      username,
      ...codeContributors[username],
    }),
  );

  contributors.sort((a, b,) => b.contributions - a.contributions,);

  const cC = contributors
    .map((contributor,) => <Contributor
      key={contributor.username}
      url={contributor.url}
      avatar={contributor.avatar}
      bio={contributor.bio}
      contributions={contributor.contributions}
      location={contributor.location}
      name={contributor.name}
      id={contributor.username}
    />,);

  const oC = otherContributors
    .map((contributor,) => <Contributor
      key={contributor.id}
      name={contributor.name}
      avatar={`/assets/contributors/${ contributor.id }.jpg`}
      url={contributor.url}
      location={contributor.location}
      contributions={contributor.contributions}
      id={contributor.id}
      bio={contributor.intro}
    />,);

  return <Layout
    page='contributors'
    path='/contributing/contributors'
  >
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
    { cC }
  </Layout>;
};
export default Index;
