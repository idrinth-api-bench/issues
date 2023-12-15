module.exports = () => ({
  id: 'get post 1',
  main: {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
  },
  post: [ '^status-2xx', ],
});
