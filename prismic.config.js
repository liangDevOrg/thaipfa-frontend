/* istanbul ignore file */
module.exports = {
  // -- Prismic API endpoint
  // Determines which repository to query and fetch data from
  // Configure your site's access point here

  apiEndpoint: "https://thaipfa-frontend.cdn.prismic.io/api/v2",

  // -- Link resolution rules
  // Manages links to internal Prismic documents
  // Additional helper function for Next/Link component
  hrefResolver: function (doc) {
    console.log("Document Function >>", doc);
    switch (doc?.type) {
      // หน้าแรก
      case "v2-home":
        return `/${lang}`;
      // การบริการลูกค้า
      case "curriculum":
        console.log("OK");
        return `/curriculum/${doc?.uid}`;
    }
  },
};
