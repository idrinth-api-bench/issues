module.exports = () => ({
  id: 'delete user',
  main: {
    method: 'delete',
    url: 'https://reqres.in/api/users/2',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
