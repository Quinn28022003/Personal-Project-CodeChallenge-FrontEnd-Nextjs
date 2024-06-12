import MainLayout from '@/app/(MainLayout)/layout'
// import { useAppDispatch, useAppSelector } from '@/lib/store/hooks/hooks'
// import { decrement, increment, incrementByAmount } from '@/lib/store/slices/todosSlice'
import { Button } from 'antd'
// import { useTheme } from 'next-themes'
import Link from 'next/link'
import styles from './index.module.scss'

const HomePage = ({ children }: { children: React.ReactNode }) => (
	// const data = useAppSelector(state => state.value)
	// const dispatch = useAppDispatch()
	// const { theme, setTheme } = useTheme()

	<MainLayout>
		<Link href={'/chat'}> click me</Link>
		{/* <h1>Count: {data} </h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button> */}
		<h2 className={`${styles.title} dark:text-green-600`}>
			hello my friends! <p className={styles.description}>hahgaha</p>
		</h2>
		{children}
		{/* <input
				type="text"
				placeholder="Hãy nhập vào đây..."
				onChange={e => dispatch(incrementByAmount(Number(e.target.value)))}
			/> */}
		<Button>click me</Button>
		{/* <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Dark Mode</button> */}
	</MainLayout>
)

export default HomePage
