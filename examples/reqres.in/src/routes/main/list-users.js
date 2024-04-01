module.exports = (apiRootUrl,) => ({
  id: 'list users',
  main: {
    method: 'get',
    url: apiRootUrl + '/users?page=2',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
