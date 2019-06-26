module.exports = {
    async exportPathMap() {
      var pages = {
        '/': { page: '/' },
        '/listView': {page:'/listView'}
      }
  
      return pages
    }
  };