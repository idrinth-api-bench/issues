import ExternalLink from './external-link.tsx';
import Lang from './lang.tsx';
import React, {
  ReactNode,
} from 'react';
import languageKey from '../locales/language-key.ts';
import './sponsor.scss';
interface SponsorProps {
  img: ReactNode;
  lnkey: string;
  to: string;
  label: string;
}

const Sponsor = ({
  img,
  lnkey,
  to,
  label,
}: SponsorProps,) => <div className={'card sponsor'}>
  {img}
  <div key={lnkey}>
    <h2>
      <ExternalLink
        to={to}
        label={label}
      />
    </h2>
    <p><Lang lnkey={`sponsors.${ lnkey }.intro` as languageKey}/></p>
    <p><Lang lnkey={`sponsors.${ lnkey }.sponsoring` as languageKey}/></p>
  </div>
</div>;

export default Sponsor;
