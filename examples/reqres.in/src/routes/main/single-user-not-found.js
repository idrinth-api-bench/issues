module.exports = () => ({
  id: 'single user not found',
  main: {
    method: 'get',
    url: 'https://reqres.in/api/users/23',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-404', ],
});
