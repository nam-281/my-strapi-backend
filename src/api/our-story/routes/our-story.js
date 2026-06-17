module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/our-story-full',
      handler: 'our-story.findFull',
      config: {
        auth: false,
      },
    },
  ],
};