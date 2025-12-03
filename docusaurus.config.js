// docusaurus.config.js (ESM)
import {themes as prismThemes} from 'prism-react-renderer';
const lastUpdated = new Date().toISOString();

const config = {
  title: 'Korus Framework',
  tagline: 'Modern Java framework for full-stack development with zero configuration',
  favicon: 'img/logo1.png',

  // Deployment
  url: 'https://korus-projects.github.io',
  baseUrl: '/',

  organizationName: 'korus-projects',
  projectName: 'korus-projects.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Enable extra themes/features
  themes: [
    '@docusaurus/theme-mermaid',        // diagrams
    '@docusaurus/theme-live-codeblock', // live playgrounds
  ],

  // Markdown + hooks
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/korus-projects/korus-projects.github.io/tree/main/',
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },

        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/korus-projects/korus-projects.github.io/tree/main/',
          authorsMapPath: 'authors.yml',
          postsPerPage: 5,
          sortPosts: 'descending',
          readingTime: ({ content, defaultReadingTime }) =>
              defaultReadingTime({ content, wordsPerMinute: 250 }),
          // feedOptions: { type: ['rss', 'atom'] },
        },

        theme: {
          customCss: './src/css/custom.css',
        },

        gtag: {
          trackingID: process.env.GTAG_ID || 'G-XBMXMW86X8',
          anonymizeIP: true,
        },

        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

      },
    ],
  ],

  plugins: [
    // Progressive Web App for offline/installable UX
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {tagName: 'link', rel: 'icon', href: '/img/logo.png'},
          {tagName: 'link', rel: 'manifest', href: '/manifest.json'},
          {tagName: 'meta', name: 'theme-color', content: '#0d1117'},
        ],
      },
    ],
    // Client redirects for future URL changes
    ['@docusaurus/plugin-client-redirects', {}],
    // Optimized responsive images for better performance
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 75,
        sizes: [320, 640, 960, 1200, 1600, 2000],
        disableInDev: true,
      },
    ],
    // plugin-sitemap is already included via preset-classic; no explicit entry needed
  ],


  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'Gygy4FgsbWRDVK9dZfXN-hQqp1iI2I3w56hFCS6Ko1E',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://github.com/Vin-it-9/#identity",
          "name": "Vinit Shinde",
          "alternateName": "Vineet Shinde",
          "url": "https://github.com/Vin-it-9",
          "image": "https://vin-it-9.github.io/portfolio/img/profile.jpg",
          "jobTitle": "Framework Architect",
          "description": "Software Engineer specializing in Java Development, Build-time Dependency Injection, and Enterprise Java Solutions. Creator of Korus Framework.",
          "worksFor": {
            "@type": "Organization",
            "name": "Korus Projects",
            "url": "https://korus-projects.github.io",
            "logo": "https://korus-projects.github.io/img/logo.png"
          },
          "sameAs": [
            "https://github.com/korus-projects",
            "https://github.com/korus-projects/korus-projects.github.io",
            "https://www.linkedin.com/company/korus-framework/",
            "https://github.com/Vin-it-9",
            "https://portfolio-vin-it-9s-projects.vercel.app/",
            "https://vin-it-9.github.io/portfolio/",
            "https://linktr.ee/vineetshinde24",
            "https://linktr.ee/vinit_projects"
          ],
          "knowsAbout": [
            "Java Framework Development",
            "Build-time Dependency Injection",
            "Ahead-of-Time Compilation",
            "Enterprise Java",
            "Annotation Processing",
            "Performance Optimization",
            "Java Virtual Machine",
            "Microservices Architecture",
            "RESTful API Development",
            "Software Architecture Design",
            "Korus Framework",
            "Undertow Web Server",
            "Jandex Indexing",
            "Maven Build Tools",
            "Spring Framework",
            "Micronaut Framework",
            "Quarkus Framework"
          ],
          "award": [
            "Creator of Korus Framework - Modern Java Build-time DI Framework"
          ],
          "nationality": "IN",
          "disambiguatingDescription": "Software engineer and framework architect who created the Korus Framework, a modern Java framework with build-time dependency injection and zero reflection."
        },
        // SoftwareApplication Object - Korus Framework
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Korus Framework",
          "@id": "https://korus-projects.github.io/#software",
          "alternateName": ["Korus", "Korus Java Framework", "Korus JVM Framework", "Korus Framework", "Korus-projects"],
          "description": "Modern Java framework with build-time dependency injection, zero reflection, and sub-200ms startup. Micronaut/Quarkus alternative with AOT compilation, Undertow web server, and Jandex-based component scanning.",
          "abstract": "Korus is a next-generation Java framework that performs dependency injection at compile-time rather than runtime, eliminating reflection overhead and achieving ultra-fast startup times under 200ms.",
          "softwareVersion": "1.0.0",
          "datePublished": "2025-12-01",
          "dateModified": new Date().toISOString().split('T')[0],
          "author": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde",
            "url": "https://github.com/Vin-it-9"
          },
          "creator": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde",
            "url": "https://github.com/Vin-it-9"
          },
          "contributor": [
            {
              "@type": "Person",
              "@id": "https://github.com/Vin-it-9/#identity",
              "name": "Vinit Shinde",
              "url": "https://github.com/Vin-it-9"
            }
          ],
          "publisher": {
            "@type": "Organization",
            "name": "Korus Projects",
            "url": "https://korus-projects.github.io",
            "logo": {
              "@type": "ImageObject",
              "url": "https://korus-projects.github.io/img/logo.png"
            },
            "sameAs": [
              "https://github.com/korus-projects",
              "https://www.linkedin.com/company/korus-framework/"
            ]
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Build-time Dependency Injection",
              "description": "Compile-time resolution of dependencies without runtime reflection"
            },
            {
              "@type": "Thing",
              "name": "Ahead-of-Time Compilation",
              "description": "AOT compilation for faster startup and reduced memory footprint"
            },
            {
              "@type": "Thing",
              "name": "Java Framework",
              "description": "Enterprise-grade framework for building Java applications"
            }
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": [
              "Java Developers",
              "Software Engineers",
              "Backend Developers",
              "Enterprise Developers",
              "Microservices Architects",
              "Full-stack Developers"
            ]
          },
          "sameAs": [
            "https://github.com/korus-projects",
            "https://github.com/korus-projects/korus-projects.github.io",
            "https://www.linkedin.com/company/korus-framework/",
            "https://github.com/Vin-it-9",
            "https://portfolio-vin-it-9s-projects.vercel.app/",
            "https://vin-it-9.github.io/portfolio/",
            "https://linktr.ee/vineetshinde24",
            "https://linktr.ee/vinit_projects"
          ],
          "url": "https://korus-projects.github.io",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "url": "https://korus-projects.github.io"
          },
          "applicationCategory": "DeveloperApplication",
          "applicationSubCategory": "Dependency Injection Framework",
          "operatingSystem": "Java 17+",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "releaseNotes": "https://korus-projects.github.io/blog",
          "isFamilyFriendly": true,
          "image": "https://korus-projects.github.io/img/logo1.png",
          "screenshot": "https://korus-projects.github.io/img/logo1.png",
          "license": "https://opensource.org/licenses/Apache-2.0",
          "codeRepository": "https://github.com/korus-projects",
          "programmingLanguage": {
            "@type": "ComputerLanguage",
            "name": "Java",
            "url": "https://www.java.com"
          },
          "runtimePlatform": "JVM (Java Virtual Machine)",
          "keywords": [
            "Korus",
            "Korus Framework",
            "Korus Java Framework",
            "Korus JVM Framework",
            "Java Framework",
            "Build-time Dependency Injection",
            "Build-time DI",
            "Compile-time DI",
            "AOT Compilation",
            "Ahead-of-Time Compilation",
            "Zero Reflection Java",
            "No Reflection Framework",
            "Fast Startup Java",
            "Sub-200ms Startup",
            "Undertow Web Server",
            "Jandex Indexing",
            "Jandex Component Scanning",
            "Enterprise Java Framework",
            "Microservices Framework",
            "Java Microservices",
            "Micronaut Alternative",
            "Quarkus Alternative",
            "Spring Alternative",
            "Modern Java Framework",
            "Next-Generation Java",
            "Java Annotation Processing",
            "Java Compiler Plugin",
            "Dependency Injection Framework",
            "Lightweight Java Framework",
            "High-Performance Java",
            "RESTful API Framework",
            "Web Framework Java",
            "Backend Framework Java",
            "Java 17 Framework",
            "Maven Plugin Java",
            "Full-stack Java Framework"
          ],
          "featureList": [
            "Build-time Dependency Injection",
            "Zero Runtime Reflection",
            "Sub-200ms Startup Time",
            "Undertow Web Server Integration",
            "Jandex-based Component Scanning",
            "AOT (Ahead-of-Time) Compilation",
            "Annotation-driven Configuration",
            "REST API Development",
            "Enterprise-grade Performance"
          ],
          "downloadUrl": "https://github.com/korus-projects/korus-projects.github.io/releases",
          "installUrl": "https://korus-projects.github.io/docs/intro",
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Java Developer Community"
              },
              "datePublished": "2025-12-01",
              "reviewBody": "Korus Framework delivers exceptional build-time dependency injection with zero reflection overhead. The sub-200ms startup time is impressive for enterprise Java applications.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              }
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "1",
            "bestRating": "5",
            "worstRating": "1"
          },
          "inLanguage": "en-US",
          "availableLanguage": [
            "en-US",
            "en-GB",
            "en-IN"
          ],
          "supportedLocales": [
            "en-US",
            "en-GB",
            "en-IN"
          ],
          "softwareRequirements": "Java 17 or higher, Maven 3.6+",
          "softwareHelp": {
            "@type": "CreativeWork",
            "url": "https://korus-projects.github.io/docs"
          },
          "maintainer": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde",
            "url": "https://github.com/Vin-it-9"
          },
          "isAccessibleForFree": true,
          "copyrightYear": 2025,
          "copyrightHolder": {
            "@type": "Person",
            "@id": "https://github.com/Vin-it-9/#identity",
            "name": "Vinit Shinde"
          },
          "availableOnDevice": "Any device with JVM",
          "memoryRequirements": "Minimum 512MB RAM",
          "storageRequirements": "Minimum 50MB disk space",
          "processorRequirements": "Any modern CPU with JVM support"
        }
      ])
    }

  ],

  themeConfig: {
    image: 'img/logo.png',

    // SEO metadata and social tags
    metadata: [
      // Basic SEO
      { name: 'keywords', content: 'Korus, Korus Framework, Korus Java Framework, Korus JVM Framework, Java framework, Dependency Injection, Build-time DI, Compile-time DI, AOT Java, Ahead-of-Time Compilation, Zero Reflection, No Reflection Framework, Undertow, Undertow Web Server, Jandex, Jandex Indexing, Micronaut alternative, Quarkus alternative, Spring Boot alternative, Spring Alternative, Fast Java framework, Sub-200ms startup, Ultra-fast startup, Java compiler plugins, Annotation Processing, Java Annotation Processing, Enterprise Java, Enterprise Java Framework, Microservices Framework, Java Microservices, RESTful API Framework, Backend Framework, Modern Java Framework, Next-Generation Java, Lightweight Java Framework, High-Performance Java, Java 17, Java 17 Framework, Maven Plugin, Full-stack Java' },
      { name: 'description', content: 'Korus Framework — Ultra-fast Java framework with build-time dependency injection, zero reflection, pre-generated DI graph, and sub-200ms startup time. Modern alternative to Spring, Micronaut, and Quarkus with AOT compilation and Undertow runtime.' },
      { name: 'author', content: 'Vinit Shinde' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },

      // Canonical & Language
      { name: 'canonical', content: 'https://korus-projects.github.io/' },
      { rel: 'canonical', href: 'https://korus-projects.github.io/' },

      // Language alternatives (add more as you translate)
      { rel: 'alternate', hreflang: 'en', href: 'https://korus-projects.github.io/' },
      { rel: 'alternate', hreflang: 'x-default', href: 'https://korus-projects.github.io/' },

      // Open Graph (Facebook, Discord, LinkedIn)
      { property: 'og:title', content: 'Korus Framework — Ultra-Fast Java Build-Time DI' },
      { property: 'og:description', content: 'Zero reflection • Build-time dependency injection • Undertow runtime • 120–250ms startup • Modern Java framework for the future. Alternative to Spring, Micronaut, and Quarkus.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://korus-projects.github.io/img/korus-social-card.png' },
      { property: 'og:image:alt', content: 'Korus Framework — Ultra-fast Java build-time DI framework' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: 'https://korus-projects.github.io' },
      { property: 'og:site_name', content: 'Korus Framework' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:updated_time', content: lastUpdated },
      { property: 'article:author', content: 'Vinit Shinde' },
      { property: 'article:section', content: 'Technology' },
      { property: 'article:tag', content: 'Java Framework' },

      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Korus Framework — Ultra-Fast Java Build-Time DI' },
      { name: 'twitter:description', content: 'A next-generation Java framework powered by build-time DI, Jandex indexing and zero reflection. Sub-200ms startup for enterprise applications.' },
      { name: 'twitter:image', content: 'https://korus-projects.github.io/img/korus-social-card.png' },
      { name: 'twitter:creator', content: '@korus_framework' },
      { name: 'twitter:site', content: '@korus_framework' },
      { name: 'twitter:domain', content: 'korus-projects.github.io' },

      // Mobile Web App
      { name: 'theme-color', content: '#0d1117' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Korus Framework' },

      // Performance & Caching
      { httpEquiv: 'Cache-Control', content: 'public, max-age=31536000, immutable' },
      { name: 'referrer', content: 'strict-origin-when-cross-origin' },

      // AI Crawlers & Search Engines
      { name: 'ai-content', content: 'This site documents Korus Framework — a Java build-time DI engine with zero reflection, AOT compilation, and sub-200ms startup time.' },
      { name: 'search-engine', content: 'AI-enabled' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'target', content: 'all' },
      { name: 'audience', content: 'Java Developers, Software Engineers, Backend Developers' },
      { name: 'classification', content: 'Java Framework, Dependency Injection, Software Development' },

      // Ownership / verification
      { name: 'google-site-verification', content: 'Gygy4FgsbWRDVK9dZfXN-hQqp1iI2I3w56hFCS6Ko1E' },
      { name: 'msvalidate.01', content: 'YOUR_BING_CODE' },

      // Additional Schema.org hints
      { name: 'application-name', content: 'Korus Framework Documentation' },
      { name: 'category', content: 'Software Development' },
    ],


    // Announcement bar
    announcementBar: {
      id: 'korus_announcement_v1',
      content:
          '⭐️ Korus Framework is now live! ' +
          'Join the community on <a href="https://github.com/korus-projects" target="_blank" rel="noopener noreferrer">GitHub</a> 🚀',
      isCloseable: true,
    },

    navbar: {
      title: 'Korus',
      hideOnScroll: true,
      logo: {
        alt: 'Korus Logo',
        src: 'img/logo.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {href: 'https://github.com/korus-projects', label: 'GitHub', position: 'right'},
        {href: 'https://www.linkedin.com/company/korus-framework/', label: 'LinkedIn', position: 'right'},
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Tutorial', to: '/docs/intro'},
            {label: 'API Reference', href: 'https://github.com/korus-projects'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'GitHub', href: 'https://github.com/korus-projects'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/company/korus-framework/'},
            {label: 'Discussions', href: 'https://github.com/korus-projects/korus-projects.github.io/discussions'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Roadmap', href: 'https://github.com/korus-projects/korus-projects.github.io/milestones'},
            {label: 'Contributing', href: 'https://github.com/korus-projects/korus-projects.github.io/blob/main/CONTRIBUTING.md'},
            {label: 'Issues', href: 'https://github.com/korus-projects/korus-projects.github.io/issues'},
          ],
        },
      ],
      copyright: `
        <div style="margin-top: 2px;">
          <p style="margin-bottom: 2px;">Copyright © ${new Date().getFullYear()} Korus Framework. All rights reserved.</p>
          <p style="font-size: 0.85rem; opacity: 0.8;">Built with ❤️ using Docusaurus</p>
        </div>
      `,
    },

    // Docs UX tweaks (hideable/auto-collapsing sidebar)
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Search (Algolia DocSearch)
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || 'YOUR_APP_ID',
      apiKey: process.env.ALGOLIA_API_KEY || 'YOUR_SEARCH_API_KEY',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchPagePath: 'search',
    },

    // Mermaid theme for dark/light
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },

    // Syntax highlighting
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['java', 'groovy', 'properties', 'kotlin', 'bash', 'json', 'yaml', 'toml'],
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  },

};

export default config;
