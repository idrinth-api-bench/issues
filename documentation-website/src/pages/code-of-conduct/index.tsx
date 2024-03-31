import React from 'react';
import Layout from '../../components/layout.tsx';
import MailLink from '../../components/mail-link.tsx';
import ExternalLink from '../../components/external-link.tsx';

const Index = () => <Layout
  page={'code-of-conduct'}
  path={'/code-of-conduct'}>
  <div className='title-card'>
    <h1>Contributor Covenant Code of Conduct</h1>
  </div>
  <div className='card'>
    <h2>Our Pledge</h2>
    <div>
      <p>
        We as members, contributors, and leaders pledge to make participation
        in our community a harassment-free experience for everyone,
        regardless of age, body size, visible or invisible disability,
        ethnicity, sex characteristics, gender identity and expression, level
        of experience, education, socioeconomic status, nationality, personal
        appearance, race, religion, or sexual identity and orientation.
      </p>
      <p>
        We pledge to act and interact in ways that contribute to an open,
        welcoming, diverse, inclusive, and healthy community.
      </p>
    </div>
  </div>
  <div className='card'>
    <h2>Our Standards</h2>
    <div>
      <p>
        Examples of behaviour that contributes to a positive environment for
        our community include:
      </p>
      <ul>
        <li>
          Demonstrating empathy and kindness toward other people
        </li>
        <li>
          Being respectful of differing opinions, viewpoints, and experiences
        </li>
        <li>
          Giving and gracefully accepting constructive feedback
        </li>
        <li>
          Accepting responsibility and apologising to those affected by our
          mistakes, and learning from the experience
        </li>
        <li>
          Focusing on what is best not just for us as individuals, but for
          the overall community
        </li>
      </ul>
      <p>Examples of unacceptable behaviour include:</p>
      <ul>
        <li>
          The use of sexualised language or imagery, and sexual attention or
          advances of any kind
        </li>
        <li>
          Trolling, insulting or derogatory comments, and personal or
          political attacks
        </li>
        <li>
          Public or private harassment
        </li>
        <li>
          Publishing others&lquot; private information, such as a physical or
          email address, without their explicit permission
        </li>
        <li>
          Other conduct which could reasonably be considered inappropriate in
          a professional setting
        </li>
      </ul>
    </div>
  </div>
  <div className='card'>
    <h3>Enforcement Responsibilities</h3>
    <div>
      <p>
        Community leaders are responsible for clarifying and enforcing our
        standards of acceptable behaviour and will take appropriate and fair
        corrective action in response to any behaviour that they deem
        inappropriate, threatening, offensive, or harmful.
      </p>
      <p>
        Community leaders have the right and responsibility to remove, edit,
        or reject comments, commits, code, wiki edits, issues, and other
        contributions that are not aligned to this Code of Conduct, and will
        communicate reasons for moderation decisions when appropriate.
      </p>
    </div>
  </div>
  <div className='card'>
    <h4>Scope</h4>
    <p>This Code of Conduct applies within all community spaces, and also
      applies when an individual is officially representing the community in
      public spaces. Examples of representing our community include using an
      official e-mail address, posting via an official social media account,
      or acting as an appointed representative at an online or offline event.
    </p>
  </div>
  <div className='card'>
    <h4>Enforcement</h4>
    <div>
      <p>
        Instances of abusive, harassing, or otherwise unacceptable behaviour
        may be reported to the community leaders responsible for enforcement
        at <MailLink to={'webmaster@idrinth-api-ben.ch'}/>. All complaints
        will be reviewed and investigated promptly and fairly.
      </p>
      <p>
        All community leaders are obligated to respect the privacy and
        security of the reporter of any incident.
      </p>
    </div>
  </div>
  <div className='card'>
    <h3>Enforcement Guidelines</h3>
    <p>
      Community leaders will follow these Community Impact Guidelines in
      determining the consequences for any action they deem in violation
      of this Code of Conduct:
    </p>
  </div>
  <div className='card'>
    <h4>1. Correction</h4>
    <div>
      <p>
        <strong>Community Impact:</strong> Use of inappropriate language or
        other behaviour deemed unprofessional or unwelcome in the community.
      </p>
      <p>
        <strong>Consequence:</strong> A private, written warning from
        community leaders, providing clarity around the nature of the
        violation and an explanation of why the behaviour was inappropriate.
        A public apology may be requested.
      </p>
    </div>
  </div>
  <div className='card'>
    <h4>2. Warning</h4>
    <div>
      <p>
        <strong>Community Impact:</strong> A violation through a single
        incident or series of actions.
      </p>
      <p>
        <strong>Consequence:</strong> A warning with consequences for
        continued behaviour. No interaction with the people involved,
        including unsolicited interaction with those enforcing the Code
        of Conduct, for a specified period of time. This includes avoiding
        interactions in community spaces as well as external channels like
        social media. Violating these terms may lead to a temporary or
        permanent ban.
      </p>
    </div>
  </div>
  <div className='card'>
    <h4>3. Temporary Ban</h4>
    <div>
      <p>
        <strong>Community Impact:</strong> A serious violation of
        standards, including sustained inappropriate behaviour.
      </p>
      <p>
        <strong>Consequence:</strong> A temporary ban from any sort of
        interaction or public communication with the community for
        a specified period of time. No public or private interaction with
        the people involved, including unsolicited interaction with those
        enforcing the Code of Conduct, is allowed during this period.
        Violating these terms may lead to a permanent ban.
      </p>
    </div>
  </div>
  <div className='card'>
    <h4>4. Permanent Ban</h4>
    <div>
      <p>
        <strong>Community Impact:</strong> Demonstrating a pattern of
        violation of community standards, including sustained inappropriate
        behaviour, harassment of an individual, or aggression toward or
        disparagement of classes of individuals.
      </p>
      <p>
        <strong>Consequence:</strong> A permanent ban from any sort of public
        interaction within the community.
      </p>
    </div>
  </div>
  <div className='card'>
    <h2>Attribution</h2>
    <div>
      <p>
        This Code of Conduct is adapted from the Contributor Covenant,
        version 2.0, available at <ExternalLink
          label={'Contributor Covenant Version 2.0'}
          to={
            'https://www.contributor-covenant.org/'
            + 'version/2/0/code_of_conduct.html'
          }
        />.
      </p>
      <p>
        Community Impact Guidelines were inspired by <ExternalLink
          label={'Mozilla&lquot;s code of conduct enforcement ladder'}
          to={'https://github.com/mozilla/diversity'}
        />.
      </p>
      <p>
        For answers to common questions about this code of conduct, see the
        FAQ at <ExternalLink
          to={'https://www.contributor-covenant.org/faq'}/>. Translations are
        available at <ExternalLink
          to={'https://www.contributor-covenant.org/translations'}
        />.
      </p>
    </div>
  </div>
</Layout>;
export default Index;
