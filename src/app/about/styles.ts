import { createStyles } from 'antd-style'
import tw from 'twin.macro'

interface IStyles {
	test: boolean
}

const useStyles = createStyles((_, { test }: IStyles) => {
	return {
		styles: {
			...tw`text-red-500`
		}
	}
})

export default useStyles
