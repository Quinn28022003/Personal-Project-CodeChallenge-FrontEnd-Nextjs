import useStyles from '@/app/about/styles'

const About = () => {
	const { styles } = useStyles({
		test: true
	})

	return (
		<div>
			<h1>Count: 1</h1>
			<button>Increment</button>
			<button>Decrement</button>
		</div>
	)
}

export default About
