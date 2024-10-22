import { MenuTheme } from 'antd'
import { IncomingHttpHeaders } from 'http'

interface IGetInitialThemeType {
	darkMode: MenuTheme | undefined
}

interface HeadersModule {
	cookies: () => {
		get: (name: string) =>
			| {
					value: string
			  }
			| undefined
	}
	draftMode: boolean
	headers: IncomingHttpHeaders
}

const getInitialTheme = (): IGetInitialThemeType => {
	let darkMode: MenuTheme | undefined

	if (typeof window === 'undefined') {
		const headers: HeadersModule = require('next/headers') as HeadersModule
		darkMode = headers.cookies().get('theme')?.value as MenuTheme
		return {
			darkMode
		}
	}
	return {
		darkMode: undefined
	}
}

export default getInitialTheme
