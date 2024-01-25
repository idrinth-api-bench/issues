import {
  existsSync, mkdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import crypto from 'crypto';

const defaultBio = 'An awesome person helping others in their time off work, ' +
  'but who doesn\'t yet have a personalized bio.';
const MILLISECONDS_PER_DAY = 86400000;

const contributors = await fetch(
  'https://api.github.com/repos/Idrinth/api-bench/contributors',
);
const users = {};

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

const update = async(contributor,) => {
  if (contributor.type !== 'User') {
    return;
  }
  if (users[contributor.login]) {
    users[contributor.login].contributions = contributor.contributions;
    return;
  }
  const data = await fetch(contributor.url);
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

for (const contributor of await contributors.json()) {
  // eslint-disable-next-line no-await-in-loop
  await update(contributor,);
}

writeFileSync('./src/contributors.json', JSON.stringify(users,),);
