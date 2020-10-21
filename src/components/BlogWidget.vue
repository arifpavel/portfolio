<template>
  <div class="grid grid-cols-2 gap-2">
      <div v-for="post in $static.posts.edges" :key="post.id" class="max-w-sm w-full lg:max-w-full lg:flex h-80">
        <img
          v-if="post.node.featuredMedia"
          :src="post.node.featuredMedia.sourceUrl"
          :alt="post.node.featuredMedia.altText"
          fluid
          class="w-56 fill-current"
        />
        <g-image v-else class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://s3.amazonaws.com/uifaces/faces/twitter/meln1ks/128.jpg" />
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              <a :href=" post.node.path ">{{ post.node.title }}</a>
            </div>
            <div class="text-gray-700 text-base text-justify" v-html=" truncate( post.node.summary )"></div>
            </div>
            <div class="flex items-center">
            <div class="text-sm">
                <p class="text-gray-900 leading-none">{{ post.node.author.name }}</p>
                <p class="text-gray-600">{{ post.node.date }}</p>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allWordPressPost (sortBy: "date", order: DESC, limit: 2){
    edges {
      node {
        title
        date (format: "MMMM D, Y")
        summary: excerpt
        path: slug
        author {
              name
              path
          }
        featuredMedia {
          sourceUrl
          altText
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  methods: {
      truncate(str, num = 70) {
        if (str.length > num) {
          return str.substring(0, num) + "...";
        } else {
          return str;
        }
      }
    }
}
</script>

<style>

</style>