import React from 'react';

interface ToolType {
  name: string;
  imgSrc?: string;
  desc: string;
  link: string
}

const Tool = ({
  name, imgSrc, desc, link,
}: ToolType,) => {

  const Image = imgSrc ? <img src={imgSrc} alt={name}/> : '';

  return <div>
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <h3>{name}</h3>
    </a>
    {Image}
    <p>{desc}</p>
  </div>;
};

export default Tool;

