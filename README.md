# Next.js demo for headless WordPress

Originally created via `npx create-next-app --example cms-wordpress nextwp`.

## Requirements
1. The [WPGraphQL plugin for WordPress](https://wordpress.org/plugins/wp-graphql/).
2. [Node.js LTS](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install/) for local development.

## Run locally
1. Copy `.env.local.example` to `.env.local`.
2. Edit `.env.local` with `WORDPRESS_API_URL=http://dev.test/graphql`, where `dev.test` is the domain for your WordPress site.
3. Run `yarn install` and `yarn run dev`.
4. Visit http://localhost:3000
