// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BRN Metaverse Whitepaper',
  tagline: 'Golden Key of The Metaverse',
  favicon: 'https://www.brntoken.net/',

  // Set the production url of your site here
  url: 'https://limitless-kode.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Limitless-Kode', // Usually your GitHub org/user name.
  projectName: 'brn-whitepaper', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath:'/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              'https://github.com/limitless-kode/brn-whitepaper',
        },
        blog:false,
        //  blog: {
        //  showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl:
        //  'https://github.com/SeraGrr/brnmetaverseWhitepaper',
        //   },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],







  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({

        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
          title: 'BRN Metaverse Whitepaper V 1.5',
          logo: {
            alt: 'My Site Logo',
            src: 'img/my-logo.png',

          },

          items: [
            // {
            //  type: 'docSidebar',
            // sidebarId: 'tutorialSidebar',
            // position: 'left',
            // label: 'Version 1.5',
            //  },



          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Audit',
                  href: 'https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/BRNMetaverse_0x926ecC7687fCFB296E97a2b4501F41A6f5F8C214.pdf',

                },
                {
                  label: 'Legal Opinion',
                  href: 'https://www.brntoken.net/assets/docs/legal-opinion.pdf',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Telegram',
                  href: 'https://t.me/BrnTokenGlobal',
                },
                {
                  label: 'Discord',
                  href: 'https://discord.gg/brnmetaverse',
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/BrnMetaverse',
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/brntoken/',
                },
                {
                  label: 'Linkedin',
                  href: 'https://www.linkedin.com/company/brnmetaverse',
                },
                {
                  label: 'Medium',
                  href: 'https://brnmetaverse.medium.com/',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  href: 'https://www.brntoken.net/blog',
                },
                {
                  label: 'brntoken.net',
                  href: 'https://brntoken.net/',
                },
                {
                  label: 'NFT Marketplace',
                  href: 'https://github.com/brntoken',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/brntoken',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} BRN Metaverse Software INC. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
