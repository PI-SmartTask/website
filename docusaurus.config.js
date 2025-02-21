// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smartask',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://PI-SmartTask.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PI-SmartTask', // Usually your GitHub org/user name.
  projectName: 'PI-SmartTask', // Usually your repo name.
  
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: './sidebars.js',
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Smartask',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          { to: '/docs/arquitetura', label: 'Arquitetura', position: 'left' },
          { to: '/docs/domuments', label: 'Domuments', position: 'left' },
          { to: '/docs/calendario', label: 'Calendario', position: 'left' },
          { href: 'https://github.com/PI-SmartTask', label: 'GitHub', position: 'right' },
        ],        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Smartask',
            items: [
              {
                label: 'Project in Informatics',
                href: '#',
              },
              {
                label: 'Department of Electronics, Telecommunications and Informatics',
                href: 'https://www.ua.pt/pt/deti',
              },
              {
                label: 'University of Aveiro',
                href: 'https://www.ua.pt/',
              },
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Jira',
                href: '#',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PI-SmartTask',
              },           
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Smartask. Built with Docusaurus.`,
      },
      
    }),
};

export default config;