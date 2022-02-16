module.exports = {
  title: "Log-Right",
  tagline: "Making the world a better place... one log at a time",
  url: "https://sullivanpj.github.io",
  baseUrl: "/log-right/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "SullivanPJ",
  projectName: "log-right",
  titleDelimiter: "📓",
  trailingSlash: false,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      fr: {
        label: "Français",
        direction: "ltr",
        htmlLang: "fr-FR",
      },
    },
  },
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "log-right, logright, log, logging, reporting, error, error handler",
      },
    ],
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: "github",
      content:
        '<b>Do you want to keep up with all the releases by this developer? Follow me on <a target="_blank" rel="noopener noreferrer" href="https://github.com/sullivanpj">GitHub</a>!</b>',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
    navbar: {
      title: "Log-Right",

      logo: {
        alt: "Log-Right",
        srcDark: "img/logo.png",
        src: "img/logo-light.png",
      },
      items: [
        {
          to: "docs/log-right/",
          activeBasePath: "docs/log-right",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/learning/introduction/",
          activeBasePath: "docs/learning",
          label: "Learning",
          position: "left",
        },
        {
          to: "apis/",
          activeBasePath: "apis",
          label: "API Reference",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [{ to: "versions/", label: "All versions" }],
          dropdownActiveClassDisabled: true,
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/sullivanpj/log-right",
          label: "GitHub",
          position: "right",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "docs/log-right/",
            },
            {
              label: "API Reference",
              to: "apis/",
            },
            {
              label: "Base",
              to: "docs/base/",
            },
            {
              label: "License",
              to: "https://mit-license.org/",
            },
          ],
        },
        {
          title: "Learning",
          items: [
            {
              label: "Introduction",
              to: "docs/learning/introduction/",
            },
            {
              label: "Installation",
              to: "docs/learning/installation/",
            },
            {
              label: "Getting Started",
              to: "docs/learning/getting-started/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/log-right",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/log-right",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/log-right",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/sullivanpj/log-right",
            },
            {
              label: "Author",
              to: "http://sullypat.com/",
            },
            {
              label: "Versions",
              to: "versions/",
            },
          ],
        },
      ],
      logo: {
        alt: "Log-Right",
        src: "img/logo-footer.png",
        href: "https://github.com/sullivanpj/log-right",
      },
      copyright: `Copyright © ${new Date().getFullYear()} 📓Log-Right`,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/sullivanpj/log-right/tree/main/apps/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};
