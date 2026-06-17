'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product.product', ({ strapi }) => ({
  async getFeaturedProducts() {
    return await strapi.entityService.findMany('api::product.product', {
      filters: {
        isFeatured: true,
      },
      populate: {
        image: true,
      },
      sort: ['sortOrder:asc'],
    });
  },
}));