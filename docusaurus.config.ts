import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DFSF',
  tagline: 'Decentralized Financial Stability Forum',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dfsforum.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DFSForum', // Usually your GitHub org/user name.
  projectName: 'DFSForum', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        /*docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/dfsforum_235x49.png',
    navbar: {
      title: 'DFSForum',
      logo: {
        alt: 'DFSForum',
        //src: 'img/dfsforum-logo-light.png',
        src: 'img/data-1293312.svg',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/events', label: 'Events', position: 'left'},
        {
          href: 'https://github.com/dfsforum',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://zotero.org/dfsforum',
          label: 'Zotero',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Events',
              to: '/events',
            },
          ],
        },
        {
          title: 'Research',
          items: [
            {
              label: 'Github',
              to: 'https://github.com/dfsforum',
            },
            {
              label: 'Zotero',
              href: 'https://www.zotero.org/groups/dfsforum',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Google Groups',
              href: 'https://groups.google.com/u/3/g/dfsforum',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/dfsforum',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/+0bFYLI4PsotmMDYx',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dfsforum',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DFSForum.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
