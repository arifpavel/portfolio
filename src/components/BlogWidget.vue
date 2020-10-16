<template>
  <div class="grid grid-cols-1 gap-2">
      <div v-for="post in $static.posts.edges" :key="post.id" class="max-w-sm w-full lg:max-w-full lg:flex">
        <!-- <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('./../../blog/images/background.jpg')" title="Woman holding a mug">
                    
        </div> -->
        <g-image class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://s3.amazonaws.com/uifaces/faces/twitter/meln1ks/128.jpg" />
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">{{ post.node.title }}</div>
            <p class="text-gray-700 text-base">{{ post.node.body }}</p>
            </div>
            <div class="flex items-center">
            <div class="text-sm">
                <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                <p class="text-gray-600">Aug 18</p>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allBlogPosts(filter: { id: { in: ["1", "2"] }}) {
    edges {
      node {
        title,
        body
      }
    }
  }
}
</static-query>

<script>
export default {
}
</script>

<style>

</style>