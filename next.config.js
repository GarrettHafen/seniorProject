const contentful = require("./helpers/contentful");
const withCSS = require("@zeit/next-css");
const withSCSS = require("@zeit/next-sass");
const webpack = require("webpack");
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withCSS(
  withSCSS({
    webpack: config => {
      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true
        })
      ];

      return config;
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
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
      };

      const listView = await contentful.query({ content_type: "listView" });
      listView.items.map(locale => {
        return Object.assign(pages, {
          [`/${locale.fields.pageUrl}`]: { page: "/listView" }
        });
      });
      const contentView = await contentful.query({
        content_type: "contentView"
      });
      contentView.items.map(locale => {
        return Object.assign(pages, {
          [`/${locale.fields.pageUrl}`]: { page: "/contentView" }
        });
      });
      return pages;
    }
  })
);
