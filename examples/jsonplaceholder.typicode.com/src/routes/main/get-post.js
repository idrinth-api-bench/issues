module.exports = (apiRootUrl,) => ({
  id: 'get post 1',
  main: {
    method: 'get',
    url: apiRootUrl + '/posts/1',
  },
  post: [ '^status-2xx', ],
});
