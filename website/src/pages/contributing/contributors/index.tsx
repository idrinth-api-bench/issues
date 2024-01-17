import React from 'react';
import Layout from '../../../components/layout.tsx';
import contributors from '../../../contributors.json' with {
  type: 'json'
};
import {
  Lang,
} from "../../../components/lang.tsx";

const Index = () => {
  const els = [];
  for (const username of Object.keys(contributors)) {
    els.push(<div className={'card profile'}>
      <img src={ contributors[username].avatar } alt={contributors[username].name}/>
      <div>
        <h2>
          <a href={contributors[username].url} target={'_blank'}>{contributors[username].name}</a>
        </h2>
        <p>{contributors[username].bio || 'An awesome person helping others in their time off work, who doesn\'t yet have a personalized bio.'}</p>
        <p>Location: {contributors[username].location || 'unknown'}</p>
        <p>{contributors[username].contributions} contributions to master</p>
      </div>
    </div>)
    ;
  }
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
    </section>}
    page='contributors'
    path='/contributing/contributors'
  />;
}
export default Index;
