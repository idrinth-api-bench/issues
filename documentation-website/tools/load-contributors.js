import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import crypto from 'crypto';
import {
  CONTRIBUTOR_API_URL,
  CONTRIBUTOR_PAGE_SIZE,
} from './constants.js';

const defaultBio = 'An awesome person helping others in their time off work, ' +
  'but who doesn\'t yet have a personalized bio.';
const MILLISECONDS_PER_DAY = 86400000;

const users = {};

if (! process.env.CI) {
  if (existsSync('./src/contributors.json',)) {
    const old = JSON.parse(readFileSync('./src/contributors.json', 'utf8',),);
    for (const key of Object.keys(old,)) {
      if (old[key].lastUpdated > Date.now() - MILLISECONDS_PER_DAY) {
        users[key] = old[key];
      }
    }
  }
  if (! existsSync('./public/assets',)) {
    mkdirSync('./public/assets', {
      recursive: true,
    },);
  }

  // eslint-disable-next-line complexity
  const update = async(contributor,) => {
    if (contributor.type !== 'User') {
      return;
    }
    if (users[contributor.login]) {
      users[contributor.login].contributions = contributor.contributions;
      return;
    }
    const data = await fetch(contributor.url,);
    const user = await data.json();
    const hash = crypto
      .createHash('md5',)
      .update(user.login,)
      .digest('hex',);
    users[user.login] = {
      contributions: contributor.contributions,
      name: user.name || user.login,
      avatar: '/assets/profile-' + hash + '.jpg',
      url: user.html_url,
      bio: user.bio || defaultBio,
      location: user.location || 'unknown',
      lastUpdated: Date.now(),
    };
    writeFileSync(
      './public/assets/profile-' + hash + '.jpg',
      Buffer.from(
        new Uint8Array(
          await (await fetch(user.avatar_url,)).arrayBuffer(),
        ),
      ),
    );
  };

  let full = false;
  let page = 0;
  do {
    page ++;
    // eslint-disable-next-line no-await-in-loop
    const contributors = await fetch(
      CONTRIBUTOR_API_URL + page,
      process.env.GITHUB_API_TOKEN ? {
        headers: {
          Authorization: `Bearer ${ process.env.GITHUB_API_TOKEN }`,
        },
      } : {},
    );
    let count = 0;
    // eslint-disable-next-line no-await-in-loop
    for (const contributor of await contributors.json()) {
      // eslint-disable-next-line no-await-in-loop
      await update(contributor,);
      count ++;
    }
    full = count === CONTRIBUTOR_PAGE_SIZE;
  } while (full);
}

writeFileSync('./src/contributors.json', JSON.stringify(users,),);
