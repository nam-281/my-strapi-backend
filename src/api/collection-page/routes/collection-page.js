module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/collection-page-full',
      handler: 'collection-page.findFull',
      config: {
        auth: false,
      },
    },
  ],
};