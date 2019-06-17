const contentful = require("contentful");

const client = contentful.createClient({
    space: "x190ertof3tb",
    accessToken:
        "ztX1-Np0z-fji7LthtiMrWnIM8BL2KwSZRRD8Old0E8"
});

module.exports = {
    query: query => client.getEntries(query),
    asset: id => client.getAsset(id)
};