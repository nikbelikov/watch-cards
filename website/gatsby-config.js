module.exports = {
  siteMetadata: {
    title: `watchcards.ru`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '46517058',
        webvisor: true,
        trackHash: true
      },
    },
  ],
};
