const contentful = require("contentful");

const client = contentful.createClient({
  space: "t5i7iuryq60u",
  accessToken: "6Ffi2n4m1lWhLzylHaukbOdCdd1CLkqPQ1ty7PENImQ"
});

module.exports = {
  query: query => client.getEntries(query),
  asset: id => client.getAsset(id)
};
