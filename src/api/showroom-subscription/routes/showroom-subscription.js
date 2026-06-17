'use strict';

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/showroom-subscriptions',
      handler: 'showroom-subscription.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/showroom-subscriptions',
      handler: 'showroom-subscription.find',
      config: {
        auth: false
      },
    },
    {
      method: 'GET',
      path: '/showroom-subscriptions/:id',
      handler: 'showroom-subscription.findOne',
      config: {
        auth: false
      },
    },
  ],
};