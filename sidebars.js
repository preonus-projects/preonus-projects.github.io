// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Introduction
    'intro',

    // Getting Started Section
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'getting-started/introduction',
      ],
    },

    // Installation
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      items: [
        'installation/setup',
      ],
    },

    // Quick Start
    {
      type: 'category',
      label: 'Quick Start',
      collapsed: true,
      items: [
        'quick-start/first-app',
      ],
    },

    // VS Code Extension
    {
      type: 'category',
      label: 'VS Code Extension',
      collapsed: true,
      items: [
        'vscode-extension/overview',
        'vscode-extension/features',
        'vscode-extension/how-to-use',
        'vscode-extension/commands',
        'vscode-extension/configuration',
        'vscode-extension/troubleshooting',
      ],
    },

  ],
};

export default sidebars;
