'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::collection-page.collection-page', ({ strapi }) => ({
  async findFull(ctx) {
    try {
      const page = await strapi.documents('api::collection-page.collection-page').findFirst({
        status: 'published',
        populate: {
          seo: true,
          hero: true,
          filterOptions: true,
          featuredDesigner: {
            populate: {
              portraitImage: true,
              detailImage: true,
            },
          },
          newsletter: true,
          featuredBannerImage: true,
        },
      });

      ctx.body = {
        data: page,
        meta: {},
      };
    } catch (error) {
      strapi.log.error('Collection page full fetch error:', error);
      ctx.throw(500, 'Unable to fetch collection page');
    }
  },
}));