<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.author.name }} wrote on {{ $page.post.date }} </div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 hover:text-white rounded-full px-4 py-2 mr-4 hover:bg-red-300">
          {{ tag.title }}
        </g-link>
      </div>
       <g-image
          v-if="$page.post.featuredMedia"
          :src="$page.post.featuredMedia.sourceUrl"
          :width="$page.post.featuredMedia.mediaDetails.width"
          :alt="$page.post.featuredMedia.altText"
          fluid
          class="mt-4 pb-2"
        />
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: wordPressPost (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title,
      path
    }
    author {
      name
      path
    }
    featuredMedia {
      sourceUrl
      altText
      mediaDetails {
        width
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style src="../css/github-markdown.css" />

