'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::homepage.homepage', ({ strapi }) => ({
  async findFull(ctx) {
    try {
      const homepage = await strapi.documents('api::homepage.homepage').findFirst({
        status: 'published',
        populate: {
          seo: true,
          hero: {
            populate: {
              backgroundImage: true,
              primaryCta: true,
              secondaryCta: true,
            },
          },
          brandStory: {
            populate: {
              image: true,
            },
          },
          featuredCurations: {
            populate: {
              image: true,
            },
          },
          testimonial: true,
          inspirationImages: {
            populate: {
              image: true,
            },
          },
          ctaSection: true,
        },
      });

      ctx.body = {
        data: homepage,
        meta: {},
      };
    } catch (error) {
      strapi.log.error('Homepage full fetch error:', error);
      ctx.throw(500, 'Unable to fetch homepage');
    }
  },
}));