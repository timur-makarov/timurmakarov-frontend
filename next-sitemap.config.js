/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://timurmakarov.com',
  generateRobotsTxt: true,
  priority: 1,
  alternativeRefs: [
    {
      href: 'https://ru.timurmakarov.com',
      hreflang: 'ru',
    },
  ],
}
