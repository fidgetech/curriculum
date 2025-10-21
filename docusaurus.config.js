// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubTheme = require('prism-react-renderer/themes/github');
const nightOwlTheme = require('prism-react-renderer/themes/nightOwl');
const nightOwlLightTheme = require('prism-react-renderer/themes/nightOwlLight');
const palenightTheme = require('prism-react-renderer/themes/palenight');
const vsDarkTheme = require('prism-react-renderer/themes/vsDark');
const vsLightTheme = require('prism-react-renderer/themes/vsLight');

const remarkDisableTokenizers = require('remark-disable-tokenizers');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LHTP',
  tagline: 'Fidgetech Code',
  favicon: 'img/favicon.ico',
  customFields: {
    latestVersion: 'v1.2',
  },
  // Set the production url of your site here
  url: 'https://fidgetechcode.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fidgetech', // Usually your GitHub org/user name.
  projectName: 'lhtp', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
    // {
    //   src: '/usersnap-loader.js',
    //   defer: true,
    // },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          disableVersioning: false,
          routeBasePath: '/',
          sidebarPath: 'sidebars.json',
          remarkPlugins: [
            [
              remarkDisableTokenizers,
              { block: ['indentedCode'] },
            ],
          ],
          versions: {
            current: {
              path: 'v1.2',
              label: 'v1.2',
              banner: 'none',
            },
            '1.1': {
              path: 'v1.1',
              label: 'v1.1',
              banner: 'none',
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['docusaurus-theme-frontmatter'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Fidgetech',
        logo: {
          alt: '',
          src: 'img/fidgetech-logo.png',
          href: 'https://fidgetech.org',
          // target: '_self'
        },
        items: [
          {
            type: 'doc',
            docId: 'courses',
            position: 'left',
            label: 'Courses',
          },
          {
            href: 'https://fidgetech.org/fidgetech-catalog',
            position: 'left',
            label: 'Handbook',
          },
          {
            label: 'Versions',
            position: 'left',
            items: [
              // {
              //   label: 'Version 1.1',
              //   to: '/v1.1',
              // },
              {
                label: 'Version 1.2',
                to: '/v1.2',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Fidgetech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
      algolia: {
        appId: 'UJLAF3EEM6',
        apiKey: '73135542b4d5ee113bc40475b3553623',
        indexName: 'fidgetechcode',
      },
    }),
};

module.exports = config;
