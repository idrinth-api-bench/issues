module.exports = () => ({
  id: 'list posts',
  main: {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  },
  post: [ '^status-2xx', ],
});
