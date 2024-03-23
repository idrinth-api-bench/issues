import React, {
  ReactNode,
} from 'react';

interface CardProps {
  titleText: string;
  titleLevel: number;
  sideMode: boolean;
  children: string[];
}

const Card = ({
  titleText,
  titleLevel,
  sideMode = true,
  children,
}: CardProps,) => {
  const TitleTag = `h${ titleLevel }` as keyof JSX.IntrinsicElements;
  const generateContent = (): ReactNode => {
    const content = Array.isArray(children,)
      ? children.map((sentence, index,) => <p key={index}>{sentence}</p>,)
      : children;
    return <div>{content}</div>;
  };

  return (
    <div className={sideMode ? 'card' : ''}>
      <TitleTag>{titleText}</TitleTag>
      {generateContent()}
    </div>
  );
};

export default Card;
