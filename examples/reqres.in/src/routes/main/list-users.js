module.exports = () => ({
  id: 'list users',
  main: {
    method: 'get',
    url: 'https://reqres.in/api/users?page=2',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
