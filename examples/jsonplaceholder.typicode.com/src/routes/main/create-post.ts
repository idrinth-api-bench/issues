export default (apiRootUrl: string,) => ({
  id: 'create post',
  main: {
    method: 'post',
    body: {
      title: 'test',
      body: 'example',
      userId: 1232,
    },
    autohandle: 'json',
    url: apiRootUrl + '/posts',
  },
  post: [ '^status-2xx', ],
});
