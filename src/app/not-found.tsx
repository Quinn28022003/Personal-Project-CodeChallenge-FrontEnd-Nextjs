import { Button, Result } from 'antd'
import Link from 'next/link'

const NotFound = () => (
	<Result
		style={{
			color: 'white'
		}}
		status="404"
		title="404"
		subTitle="Sorry, the page you visited does not exist."
		extra={
			<Link href={'/'}>
				<Button type="primary">Back Home</Button>
			</Link>
		}
	/>
)

export default NotFound
