module.exports = () => ({
  id: 'login',
  main: {
    method: 'post',
    body: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
    autohandle: 'json',
    url: 'https://reqres.in/api/login',
  },
  pre: [ '^user-agent', ],
  post: [
    '^status-2xx',
    '^access-token',
  ],
});
