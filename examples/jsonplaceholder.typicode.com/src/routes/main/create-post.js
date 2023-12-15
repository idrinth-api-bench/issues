module.exports = () => ({
  id: 'create post',
  main: {
    method: 'post',
    body: {
      title: 'test',
      body: 'example',
      userId: 1232,
    },
    autohandle: 'json',
    url: 'https://jsonplaceholder.typicode.com/posts',
  },
  post: [ '^status-2xx', ],
});
