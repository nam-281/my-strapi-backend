'use strict';

module.exports = {
  register(/* { strapi } */) {},

  bootstrap({ strapi }) {
    strapi.log.info('BlissHaven backend started successfully.');
  },
};