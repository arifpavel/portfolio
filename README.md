# Gridsome Portfolio Site Based on Headless Wordpress

A static gridsome site for my personal portfolio.

![screenshot](https://user-images.githubusercontent.com/4316355/55691365-a2403380-596b-11e9-93be-05b846ec7760.jpg)

## Demo URL

[https://arifpavel.netlify.com](https://arifpavel.netlify.com)

## Features

- Clean and minimal design
- [Tailwind CSS v1](https://tailwindcss.com) (with PurgeCSS). Using [this gridsome plugin](https://gridsome.org/plugins/gridsome-plugin-tailwindcss).
- Scroll to sections using [vue-scrollto](https://github.com/rigor789/vue-scrollto)
- Wordpress rest for posts
- Theme Switcher with Dark Mode
- Search posts with [Fuse.js](https://fusejs.io) and [vue-fuse](https://github.com/shayneo/vue-fuse)
- Tags from wordpress posts
- Basic pagination
- Syntax highlighting with [Shiki](https://shiki.matsu.io) (using [this gridsome plugin](https://gridsome.org/plugins/gridsome-plugin-remark-shiki))
- 404 Page
- RSS Feed
- Sitemap in XML

## Installation

1. Install Gridsome CLI tool if you don't have it: `npm install --global @gridsome/cli`
1. Clone the repo: `git clone https://github.com/arifpavel/portfolio.git`
1. `cd portfolio`
1. `npm install` (This can be a long download because of Cypress. If you don't care about testing with Cypress, remove it from `package.json`)
1. `gridsome develop` to start a local dev server at `http://localhost:8080`

## Testing

I have some basic end-to-end tests using [Cypress](https://cypress.io). You can find them in `/cypress/integration/tests.js`.

To run tests, first make sure your dev server is running with `gridsome develop`. I'm assuming you're using the default port of 8080. If not, change the `baseUrl` key in the `cypress.json` file.

After your dev server is running, you can run `npm run test` or `./node_modules/.bin/cypress open` to start Cypress. The Cypress electron app will run. Click the `tests.js` file and the tests will run in an automated browser.

## Credits

 - Based on Andre Madarang's [Gridsome Portfolio Starter](https://gridsome-portfolio-starter.netlify.com). I wanted to use Wordpress CMS backend with more features instead of markdowns.
 - Illustrations from [unDraw](https://undraw.co)
 - Search is based on [Fuse.js](https://fusejs.io) and [vue-fuse](https://github.com/shayneo/vue-fuse).