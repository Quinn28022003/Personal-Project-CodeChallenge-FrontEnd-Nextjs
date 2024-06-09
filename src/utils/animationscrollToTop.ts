export const scrollToTop = (): void => {
	const scrollStep: number = -window.scrollY / (500 / 30)

	const scrollInterval: NodeJS.Timeout = setInterval((): void => {
		if (window.scrollY !== 0) {
			window.scrollBy(0, scrollStep)
		} else {
			clearInterval(scrollInterval)
		}
	}, 15)
}
