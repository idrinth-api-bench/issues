export default (apiRootUrl: string,) => ({
  id: 'delete user',
  main: {
    method: 'delete',
    url: apiRootUrl + '/users/2',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
