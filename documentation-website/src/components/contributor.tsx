import ExternalLink from './external-link.tsx';
import React from 'react';
import './contributor.scss';

interface ContributorType {
  id: string;
  avatar: string;
  name: string;
  bio: string;
  location: string;
  contributions: number|string;
  url: string;
}

const Contributor = ({
  id,
  avatar,
  name,
  url,
  bio,
  location,
  contributions,
}: ContributorType,) => {
  if (typeof contributions === 'number') {
    contributions = `${ contributions } contributions to master`;
  }
  id = id.toLowerCase();
  return <div
    id={id}
    className={'contributor'}>
    <img src={avatar} alt={name}/>
    <div>
      <h2>
        <a href={`#${ id }`}>#</a>
        {' '}
        <ExternalLink to={url} label={name}/>
      </h2>
      <p>{bio}</p>
      <p>Location: {location}</p>
      <p>{contributions}</p>
    </div>
  </div>;
};

export default Contributor;
