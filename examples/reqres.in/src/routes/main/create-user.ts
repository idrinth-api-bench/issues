export default (apiRootUrl: string,) => ({
  id: 'create user',
  main: {
    method: 'post',
    url: apiRootUrl + '/users',
    autohandle: 'json',
    body: {
      name: 'Winston Churchill',
      job: 'Legend',
    },
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
