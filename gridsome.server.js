// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api, options) {
  api.loadSource(async actions => {
    let posts;
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( (res) => {
      console.log(res)
      posts = res.data
    })
    
    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })

    for (const post of posts) {
      collection.addNode({
        id: post.id,
        title: post.title,
        body: post.body
      })
    }
  })
}
