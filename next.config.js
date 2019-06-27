const contentful = require("./helpers/contentful");

module.exports = {
    async exportPathMap() {
      var pages = {
        '/': { page: '/' }
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