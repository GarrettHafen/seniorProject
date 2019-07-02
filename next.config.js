const contentful = require("./helpers/contentful");

module.exports = {
  async exportPathMap() {
    var pages = {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/signup': { page: '/signup' }
    }
    const listView = await contentful.query({ content_type: "listView" });
    listView.items.map(locale => {
      return Object.assign(pages, {
        [`/${locale.fields.pageUrl}`]: { page: "/listView" }
      });
    });
    return pages
  }
};