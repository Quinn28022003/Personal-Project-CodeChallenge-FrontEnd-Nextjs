import { IncomingHttpHeaders } from 'http'

interface IGetInitialThemeType {
	currentPath: string | undefined
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

const getCurrentPath = (): IGetInitialThemeType => {
	let currentPath: string | undefined

	if (typeof window === 'undefined') {
		const headers: HeadersModule = require('next/headers') as HeadersModule
		currentPath = headers.cookies().get('currentPath')?.value
		return {
			currentPath
		}
	}
	return {
		currentPath: undefined
	}
}

export default getCurrentPath
