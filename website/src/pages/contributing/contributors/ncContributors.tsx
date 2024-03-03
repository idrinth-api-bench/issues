export interface Contributor {
  id: number;
  name: string;
  url: string;
  contributions: number;
  location: string;
  intro: string;
}

const ncContributors: Contributor[] = [
  {
    id: 0,
    name: 'Person 1',
    url: 'www.github.com',
    contributions: 0,
    location: 'unkown',
    intro: 'Please add Intro',
  },
  {
    id: 1,
    name: 'Person 2',
    url: 'www.github.com',
    contributions: 0,
    location: 'unkown',
    intro: 'Please add Intro',
  },
];

export default ncContributors;
