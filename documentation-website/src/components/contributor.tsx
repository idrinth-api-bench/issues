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
    contributions = `${ contributions } contributions to the-one`;
  }
  id = id.toLowerCase();
  return <div
    id={id}
    className={'contributor'}>
    <picture>
      <source srcSet={avatar.replace(/jpg$/u, 'avif',)} type="image/avif"/>
      <source srcSet={avatar.replace(/jpg$/u, 'webp',)} type="image/webp"/>
      <img src={avatar} alt={name}/>
    </picture>
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
