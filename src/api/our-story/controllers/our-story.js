'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::our-story.our-story', ({ strapi }) => ({
  async findFull(ctx) {
    try {
      const story = await strapi.documents('api::our-story.our-story').findFirst({
        status: 'published',
        populate: {
          seo: true,
          hero: {
            populate: {
              image: true,
            },
          },
          chapterOne: {
            populate: {
              imageOne: true,
              imageTwo: true,
            },
          },
          pullQuote: true,
          heritageImage: true,
          bentoCards: {
            populate: {
              image: true,
            },
          },
          showroomPrimaryCta: true,
          showroomSecondaryCta: true,
        },
      });

      ctx.body = {
        data: story,
        meta: {},
      };
    } catch (error) {
      strapi.log.error('Our Story full fetch error:', error);
      ctx.throw(500, 'Unable to fetch our story');
    }
  },
}));