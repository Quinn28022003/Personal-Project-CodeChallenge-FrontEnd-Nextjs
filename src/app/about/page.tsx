'use client'
import Button from 'antd/lib/Button'

import useStyles from '@/app/about/styles'

const About = () => {
	const { styles } = useStyles({
		test: true
	})
	return (
		<div>
			About
			<h1 className={`${styles.styles}`}>12312</h1>
			<span>
				<Button />
				<div />
			</span>
		</div>
	)
}

export default About
