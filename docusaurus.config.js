// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Move Docs',
	tagline: 'Run your Movement.',
	url: 'https://docs.move.xyz',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon-move.png',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'themovementdao', // Usually your GitHub org/user name.
	projectName: 'move-docs', // Usually your repo name.

	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: '/',
					editUrl: 'https://github.com/themovementdao/move-docs/blob/master/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	themeConfig: {
		image: 'img/move.png',
		docs: {
			sidebar: {
				autoCollapseCategories: true
			}
		},
		navbar: {
			title: 'Move',
			logo: {
				alt: 'Logo',
				src: 'img/logo.gif'
			},
			items: [
				{
					type: 'docSidebar',
					position: 'left',
					sidebarId: 'dev',
					label: 'Docs'
				},
				{
					type: 'docSidebar',
					position: 'left',
					sidebarId: 'dao',
					label: 'Movement DAO'
				},
				{
					type: 'docSidebar',
					position: 'left',
					sidebarId: 'peace',
					label: 'Peace DAO'
				},
				{
					type: 'dropdown',
					label: 'Resources',
					position: 'right',
					items: [
						{
							label: 'Move',
							to: 'https://move.xyz'
						},
						{
							label: 'Peace',
							to: 'https://peace.move.xyz'
						},
						{
							label: 'Discord',
							to: 'https://discord.gg/movexyz'
						},
						{
							label: 'Twitter',
							to: 'https://twitter.com/move_xyz'
						},
						{
							label: 'GitHub',
							to: 'https://github.com/movement-dao'
						}
					]
				}
			]
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		}
	}
};

module.exports = config;
