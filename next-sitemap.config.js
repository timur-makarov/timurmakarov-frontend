/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://timurmakarov.com',
  additionalPaths: () => {
    return [
      {
        loc: 'https://ru.timurmakarov.com',
      },
    ]
  },
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
