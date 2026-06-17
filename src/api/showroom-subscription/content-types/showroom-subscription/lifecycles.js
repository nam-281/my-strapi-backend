'use strict';

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;

    if (!data.subscribedAt) {
      data.subscribedAt = new Date().toISOString();
    }

    if (!data.status) {
      data.status = 'subscribed';
    }

    if (!data.source) {
      data.source = 'collection-newsletter';
    }
  },
};