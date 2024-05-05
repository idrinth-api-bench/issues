export default (apiRootUrl: string,) => ({
  id: 'patch post 454',
  main: {
    method: 'patch',
    body: {
      title: 'test',
    },
    autohandle: 'json',
    url: apiRootUrl + '/posts/454',
  },
  post: [ '^status-2xx', ],
});
