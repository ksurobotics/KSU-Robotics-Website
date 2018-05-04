require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-stylus',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'ksurobotics526504718.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WPCOM_APP_CLIENTSECRET,
          wpcom_app_clientId: process.env.WPCOM_APP_CLIENTID,
          wpcom_user: process.env.WPCOM_USER,
          wpcom_pass: process.env.WPCOM_PASS,
        },
        verboseOutput: false,
      },
    },
  ],
};
