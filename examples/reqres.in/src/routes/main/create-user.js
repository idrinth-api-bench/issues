module.exports = () => ({
  id: 'create user',
  main: {
    method: 'post',
    url: 'https://reqres.in/api/users',
    autohandle: 'json',
    body: {
      name: 'Winston Churchill',
      job: 'Legend',
    },
  },
  pre: [
    '^user-agent',
    '^access-token',
  ],
  post: [ '^status-2xx', ],
});
