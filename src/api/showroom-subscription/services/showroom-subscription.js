'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService(
  'api::showroom-subscription.showroom-subscription',
  ({ strapi }) => ({
    async isEmailExists(email) {
      const existing = await strapi.documents('api::showroom-subscription.showroom-subscription').findMany({
        filters: { email },
      });

      return existing.length > 0;
    },

    async subscribe(email, source = 'collection-newsletter') {
      return await strapi.documents('api::showroom-subscription.showroom-subscription').create({
        data: {
          email,
          source,
          status: 'subscribed',
          subscribedAt: new Date().toISOString(),
        },
      });
    },
  })
);