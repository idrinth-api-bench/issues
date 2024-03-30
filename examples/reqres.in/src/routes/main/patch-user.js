module.exports = (apiRootUrl,) => ({
  id: 'patch user',
  main: {
    method: 'patch',
    url: apiRootUrl + '/users/7',
    autohandle: 'json',
    body: {
      name: 'Winston Churchill',
    },
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
