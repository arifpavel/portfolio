// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Arif Pavel | Full Stack Developer',
  siteDescription: 'Personal portfolio site of Arif Pavel',
  siteUrl: 'https://arifpavel.netlify.com',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: 'gridsome-source-wordpress',
      options: {
        baseUrl: 'https://arifpavel.skewsoftbd.com/', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 10,
        concurrent: 10,
        routes: {
          post: '/:slug',
          post_tag: '/tag/:slug'
        },
        splitPostsIntoFragments: false, // default false
        downloadRemoteImagesFromPosts: true, // default false
        downloadRemoteFeaturedImages: true, // default false
        downloadACFImages: true, // default false
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Documentation.vue', // Optional
        plugins: [
          [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'WordPressPost',
        feedOptions: {
          title: 'Arif Pavel | Full Stack Developer',
          feed_url: 'https://arifpavel.netlify.app/rss.xml',
          site_url: 'https://arifpavel.netlify.app/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://arifpavel.netlify.app' + node.path,
          author: 'Arif Pavel',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
