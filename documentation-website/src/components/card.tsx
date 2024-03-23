import React, { ReactNode } from "react";
const HeadingLevels = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6,
} as const;
interface CardProps {
  titleText: string;
  titleLevel: (typeof HeadingLevels)[keyof typeof HeadingLevels];
  sideMode: boolean;
  children: ReactNode;
}

const Card = ({
  titleText,
  titleLevel,
  sideMode = true,
  children,
}: CardProps) => {
  const TitleTag = `h${titleLevel}` as keyof JSX.IntrinsicElements;
  const generateContent = (): ReactNode => <p>{children}</p>;
  // if(Array.isArray(children)){
  //   children.map((sentences:string , index)=>{
  //       return <p key={index}>{sentences}</p>
  //   })
  // }
  return (
    <div className={sideMode ? "card" : ""}>
      <TitleTag>{titleText}</TitleTag>
      {generateContent()}
    </div>
  );
};

export default Card;
