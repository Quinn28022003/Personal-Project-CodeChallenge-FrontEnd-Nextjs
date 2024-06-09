'use client'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks/hooks'
import { decrement, increment, incrementByAmount } from '@/lib/store/slices/todosSlice'

const App = () => {
	const data = useAppSelector(state => state.value)
	const dispatch = useAppDispatch()

	return (
		<div>
			<h1>Count: {data} </h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<input
				type="text"
				placeholder="Hãy nhập vào đây..."
				onChange={e => dispatch(incrementByAmount(Number(e.target.value)))}
			/>
		</div>
	)
}

export default App
