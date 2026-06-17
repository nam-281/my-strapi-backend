module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/homepage-full',
      handler: 'homepage.findFull',
      config: {
        auth: false,
      },
    },
  ],
};