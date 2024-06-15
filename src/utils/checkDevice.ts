import { UserAgent, parse } from 'next-useragent'

const checkDevice = (): string => {
	if (typeof window === 'undefined') {
		return 'server'
	}

	const userAgent: string = navigator.userAgent
	const ua: UserAgent = parse(userAgent)

	return ua.isMobile ? 'mobile' : 'desktop'
}

export default checkDevice
