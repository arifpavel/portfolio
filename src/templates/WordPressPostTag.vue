<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h2 class="text-4xl font-bold mb-8 border-b">Tag: {{ $page.tag.title }}</h2>

      <div v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }} By {{ post.node.author.name }}</span>
          <!-- <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span> -->
        </div>
        <g-image
          v-if="post.node.featuredMedia"
          :src="post.node.featuredMedia.sourceUrl"
          :alt="post.node.featuredMedia.altText"
          fluid
          class="mt-4 w-full h-56 pb-2"
        />
        <div class="text-lg mb-4" v-html=" post.node.summary ">
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div>

      <pagination-posts
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        :base="`/tag/${$page.tag.title}`"
        :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
        :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
      />

    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: wordPressPostTag (id: $id) {
    title
    belongsTo (page: $page, perPage: 2) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on WordPressPost {
            title
    	      date (format: "MMMM D, Y")
            path: slug
            summary:excerpt
            tags {
              title
            }
            author{
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
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo() {
    return {
      title: 'Tag: ' + this.$page.tag.title
    }
  },
  components: {
    PaginationPosts
  }
}
</script>
