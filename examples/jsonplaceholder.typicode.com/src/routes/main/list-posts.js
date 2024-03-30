module.exports = (apiRootUrl,) => ({
  id: 'list posts',
  main: {
    method: 'get',
    url: apiRootUrl + '/posts',
  },
  post: [ '^status-2xx', ],
});
