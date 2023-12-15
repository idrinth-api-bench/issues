module.exports = () => ({
  id: 'update post 1',
  main: {
    method: 'put',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    autohandle: 'json',
    body: {
      id: 1,
      userId: 9986,
      body: 'updated',
      title: 'Updated title',
    },
  },
  post: [ '^status-2xx', ],
});
