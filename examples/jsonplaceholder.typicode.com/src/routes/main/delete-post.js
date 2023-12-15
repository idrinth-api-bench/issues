module.exports = () => ({
  id: 'delete post 1',
  main: {
    method: 'delete',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
  },
  post: [ '^status-2xx', ],
});
