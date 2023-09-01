import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Allotment.community Documentation",
  description: "Documentation for the allotment.community software",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: false,

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Allotment.community", link: "https://allotment.community" },
    ],

    sidebar: [
      {
        text: "Admin",
        items: [
          { text: "Settings", link: "/admin/settings" },
          { text: "Tags", link: "/admin/categories" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
