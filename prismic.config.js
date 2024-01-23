/* istanbul ignore file */
module.exports = {
  // -- Prismic API endpoint
  // Determines which repository to query and fetch data from
  // Configure your site's access point here

  apiEndpoint: "https://thaipfa-frontend.cdn.prismic.io/api/v2",

  accessToken: process.env.NEXT_PUBLIC_PRISMIC_TOKEN,

  // -- Link resolution rules
  // Manages links to internal Prismic documents
  // Additional helper function for Next/Link component
  hrefResolver: function (doc) {
    switch (doc?.type) {
      // หลักสูตร
      case "curriculum":
        return `/curriculum/${doc?.uid}`;
      case "about_us":
        return `/about-us/${doc?.uid}`;

      default:
        if (doc?.link_type === "Web") {
          return doc?.url;
        }
        if (doc?.link_type === "Media") {
          return doc?.url;
        }
        return "/";
    }
  },
};
