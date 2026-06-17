'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;

    if (ctx.url.startsWith('/api')) {
      strapi.log.info(
        `[API LOG] ${ctx.method} ${ctx.url} -> ${ctx.status} (${ms}ms)`
      );
    }
  };
};