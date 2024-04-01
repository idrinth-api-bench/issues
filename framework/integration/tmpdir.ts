if (process.env.RUNNER_TEMP) {
  (async() => {
    const os = await import('os');
    os.tmpdir = () => process.env.RUNNER_TEMP;
  })();
}
