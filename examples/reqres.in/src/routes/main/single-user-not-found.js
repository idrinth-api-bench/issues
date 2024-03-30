module.exports = (apiRootUrl,) => ({
  id: 'single user not found',
  main: {
    method: 'get',
    url: apiRootUrl + '/users/23',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-404', ],
});
