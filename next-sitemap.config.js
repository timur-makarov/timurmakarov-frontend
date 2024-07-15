/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://timurmakarov.com',
  generateRobotsTxt: true,
  priority: 1,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://timurmakarov.com/server-sitemap.xml',
      'https://ru.timurmakarov.com/server-sitemap.xml',
    ],
  },
}
