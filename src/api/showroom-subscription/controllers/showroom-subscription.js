'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

module.exports = createCoreController(
  'api::showroom-subscription.showroom-subscription',
  ({ strapi }) => ({
    async create(ctx) {
      try {
        const body = ctx.request.body || {};
        const data = body.data || body;

        const email = data.email?.trim()?.toLowerCase();
        const source = data.source || 'collection-newsletter';

        if (!email) {
          return ctx.badRequest('Email is required');
        }

        if (!isValidEmail(email)) {
          return ctx.badRequest('Invalid email format');
        }

        const service = strapi.service('api::showroom-subscription.showroom-subscription');
        const exists = await service.isEmailExists(email);

        if (exists) {
          return ctx.badRequest('Email already subscribed');
        }

        const entry = await service.subscribe(email, source);

        ctx.status = 201;
        ctx.body = {
          message: 'Subscription successful',
          data: entry,
        };
      } catch (error) {
        strapi.log.error('Subscription create error:', error);
        return ctx.internalServerError('Unable to subscribe at this time');
      }
    },

    async find(ctx) {
      return await super.find(ctx);
    },

    async findOne(ctx) {
      return await super.findOne(ctx);
    },
  })
);