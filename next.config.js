const contentful = require("./helpers/contentful");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  SassModules: true,
  webpack: config => {
    return config;
  },
  async exportPathMap() {
    var pages = {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/signup": { page: "/signup" },
      "/calendar2": { page: "/calendar2" }
    };
    const listView = await contentful.query({ content_type: "listView" });
    listView.items.map(locale => {
      return Object.assign(pages, {
        [`/${locale.fields.pageUrl}`]: { page: "/listView" }
      });
    });
    return pages;
  }
});
