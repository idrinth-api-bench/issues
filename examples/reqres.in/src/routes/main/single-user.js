module.exports = () => ({
  id: 'single user',
  main: {
    method: 'get',
    url: 'https://reqres.in/api/users/2',
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
