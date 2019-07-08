const contentful = require("./helpers/contentful");
const withCSS = require("@zeit/next-css");
const withSCSS = require("@zeit/next-sass")
const webpack = require('webpack');

module.exports = withCSS(withSCSS({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  async exportPathMap() {
    var pages = {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/signup": { page: "/signup" },
      "/calendar": { page: "/calendar" },
      "/404": { page: "/404" }
    }

    const listView = await contentful.query({ content_type: "listView" });
    listView.items.map(locale => {
      return Object.assign(pages, {
        [`/${locale.fields.pageUrl}`]: { page: "/listView" }
      });
    });
    return pages;
  }
}));
