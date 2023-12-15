module.exports = () => ({
  id: 'patch post 454',
  main: {
    method: 'patch',
    body: {
      title: 'test',
    },
    autohandle: 'json',
    url: 'https://jsonplaceholder.typicode.com/posts/454',
  },
  post: [ '^status-2xx', ],
});
