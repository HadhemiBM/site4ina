/** @type {import('next-sitemap').IConfig} */
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://4inatechnology.com',
  generateRobotsTxt: true,
  changefreq: 'daily', // 🔁 ici on force daily
  priority: 0.7,
  sitemapSize: 5000,
};
