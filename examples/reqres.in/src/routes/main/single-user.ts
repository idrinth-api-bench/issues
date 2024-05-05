export default (apiRootUrl: string,) => ({
  id: 'single user',
  main: {
    method: 'get',
    url: apiRootUrl + '/users/2',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
