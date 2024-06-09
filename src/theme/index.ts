interface iCssVars {
	colorDark: string
	colorPrimary: string
	subPrimary: string
}

interface ITheme {
	token: {
		fontFamily: string

		// Colors
		colorText: string
		colorLink: string
		colorInfo: string
		colorPrimary: string
		colorSuccess: string
		colorWarning: string
		colorError: string
	}
}

interface ICustomToken {
	cssVars: iCssVars
}

export const cssVars: iCssVars = {
	colorDark: '#1f2937',
	colorPrimary: '#04AA6D',
	subPrimary: '#04aa6d'
}

const theme: ITheme = {
	token: {
		fontFamily: "'Roboto', sans-serif",

		// Colors
		colorText: '#272727',
		colorLink: '#32a1c8',
		colorInfo: '#40a9ff',
		colorPrimary: '04AA6D',
		colorSuccess: '#2fce00',
		colorWarning: '#fea800',
		colorError: '#ff494e'
	}
}

export const customToken: ICustomToken = {
	cssVars
}

export default theme
