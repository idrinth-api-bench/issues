import React from 'react';
import Layout from '../../components/layout.tsx';
import ExternalLink from '../../components/external-link.tsx';
import MailLink from '../../components/mail-link.tsx';

const Index = () => <Layout Outlet={<>
  <div className='title-card'>
    <h1>Imprint</h1>
  </div>
  <div className='card'>
    <h2>Data provided according to § 5 TMG</h2>
    <div itemScope itemType='https://schema.org/Organization'>
      <meta content='Björn Büttner' itemProp='name' />
      <meta content='https://bjoern-buettner.me' itemProp='url' />
      <meta content='https://bjoern-buettner.me/logo.png' itemProp='logo' />
      <meta content='webmaster@idrinth-api-ben.ch' itemProp='email' />
      <p itemProp='address'>
          Björn Büttner
        <br /> Böllerts Höfe 4<br />
          45479 Mülheim an der Ruhr
      </p>
    </div>
  </div>
  <div className='card'>
    <h2>Contact</h2>
    <p>
        Telephone: <span itemProp='telephone'>+4917647945826</span>
      <br />
        eMail:{' '}
      <MailLink to='webmaster@idrinth-api-ben.ch'/>
    </p>
  </div>
  <div className='card'>
    <h2>Responsible for the content according to § 55 Abs. 2 RStV</h2>
    <p itemProp='address'>
        Björn Büttner
      <br /> Böllerts Höfe 4<br />
        45479 Mülheim an der Ruhr
    </p>
  </div>
  <div className='card'>
    <div>
      <h2>Limited liability:</h2>
      <h3>Liability for links</h3>
    </div>
    <p>
        We can accept no liability for links to third party sites. At the point
        of creation we checked that they didn&apos;t 
        break laws, but permanent
        checking is not possible. In case one of those external links breaks
        laws, we will remove them as soon as we are notified of that.
    </p>
  </div>
  <div className='card'>
    <h2>Privacy</h2>
    <div>
      <p>
          The use of this website can be done without supplying personal
          information. Data will not be shared with third parties without your
          explicit consent.
      </p>
      <p>
          We are using Matomo to track the website usage to improve the user
          experience. The IP address is analysed during this tracking.
      </p>
      <p>
          Data transfer across the internet(for example via email) can have
          security issues.
        <br />
          It is therefore not possible to guarantee a complete data protection
          from third party access.
      </p>
      <p>
          The use of contact data provided because of the imprint requirement
          for other purposes, like sending advertisements and information mails,
          is not acceptable.
        <br />
          We reserve the right to combat abuse of the contact data legally in
          cases of abuse, for example spam mails.
      </p>
    </div>
  </div>
  <div className='card'>
    <h2>Source</h2>
    <p>
        Based on
      <em>
        {' '}<ExternalLink
          to='https://www.e-recht24.de/muster-disclaimer.htm'
          label='Disclaimer'/>
        {' '}of eRecht24, the internet law portal of{' '}
        <ExternalLink
          to='https://www.e-recht24.de/'
          label='lawyer'
        />{' '}
          Sören Siebert.
      </em>
    </p>
  </div>
</>}
page='imprint'
path='/imprint'
/>;
export default Index;
