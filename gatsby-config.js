module.exports = {
  siteMetadata: {
    siteUrl: "https://hyedinion.netlify.app/",
    title: "Hyedinion 블로그",
    description: "공부한것을 정리하자",
    author: "Hyejin Jung",
    socials: {
      email: "ja03129@naver.com",
      github: "hyedinion",
    },
    categories: [
      {
        name: "Blog",
        slug: "blog",
        color: "#0c9ee4",
      },
      {
        name: "Android",
        slug: "android",
        color: "#f7615f",
      },
      {
        name: "Algorithm",
        slug: "algorithm",
        color: "#ffa22b",
      },
    ],
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "G-9E8MSQHQBY", // Google Analytics / GA
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     // gtagConfig: {
    //     //   optimize_id: "OPT_CONTAINER_ID",
    //     //   anonymize_ip: true,
    //     //   cookie_expires: 0,
    //     // },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ["/preview/**", "/do-not-track/me/too/"],
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
          name: "content",
          path: `${__dirname}/content/`
      }
    },  
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+KR\:100,300,400,500,700,900`,
          `Roboto+Mono\:100,300,400,500,700,900`
          ],
        display: "swap",
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    
  ],
};
