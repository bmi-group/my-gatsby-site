import type { GatsbyConfig } from "gatsby"
const adapter = require("gatsby-adapter-netlify").default

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  adapter: adapter({
    excludeDatastoreFromEngineFunction: true,
    imageCDN: false,
  }),
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
  flags: {
    DEV_SSR: process.env.GATSBY_PREVIEW !== "true",
    FAST_DEV: process.env.GATSBY_PREVIEW !== "true",
    PARALLEL_SOURCING: process.env.GATSBY_PREVIEW !== "true",
    PRESERVE_FILE_DOWNLOAD_CACHE: process.env.GATSBY_PREVIEW !== "true",
    PARALLEL_QUERY_RUNNING: process.env.GATSBY_PREVIEW !== "true"
  }
}

export default config
