const { execSync } = require('child_process');

execSync(
  'npm run ' + process.argv[2],
  {
    cwd: __dirname,
    stdio: 'inherit',
  },
);
