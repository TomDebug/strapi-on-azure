// path: ./config/env/production/server.js

module.exports = ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url: "https://plugindown.azurewebsites.net",
    auth: {
    secret: env('ADMIN_JWT_SECRET'),
    },
    url: '/',
    serveAdminPanel: false
  });
