import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		/**
		 * ? Define screens follow antd-style lib
		 * ? Link docs: https://ant-design.github.io/antd-style/api/use-responsive
		 */
		screens: {
			xs: '375px', // minWidth: 0
			sm: '576px', // minWidth: 576
			md: '768px', // minWidth: 768
			lg: '992px', // minWidth: 992
			xl: '1200px', // minWidth: 1200
			'2xl': '1600px', // minWidth: 1600

			mobile: '0px',
			tablet: '768px',
			laptop: '1200px',
			desktop: '1600px'
		},
		extend: {
			colors: {
				/**
				 * ? Antd theme colors, define for SeedToken
				 * ? Link docs: https://ant.design/docs/react/customize-theme#seedtoken
				 */
				text: '#272727',
				link: '#32a1c8',
				info: '#40a9ff',
				primary: '#04AA6D',
				success: '#2fce00',
				warning: '#fea800',
				error: '#ff494e',
				subPrimary: '#04aa6d',
				darkMode: '#1f2937'
			}
		}
	},
	plugins: [],
	darkMode: 'class',
	corePlugins: {
		preflight: false
	}
}
export default config
