'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    const existingFilters = ctx.query.filters || {};

    ctx.query = {
      ...ctx.query,
      filters: existingFilters,
      populate: {
        image: true,
      },
      sort: ['sortOrder:asc', 'publishedAt:desc'],
    };

    const result = await super.find(ctx);
    return result;
  },

  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
      },
    };

    return await super.findOne(ctx);
  },
}));