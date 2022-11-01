// path: ./config/env/production/server.js

module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://plugindown.azurewebsites.net",
    admin: {
      url: "https://thankful-stone-07761df03.2.azurestaticapps.net",
      serveAdminPanel: false,
    },
  });