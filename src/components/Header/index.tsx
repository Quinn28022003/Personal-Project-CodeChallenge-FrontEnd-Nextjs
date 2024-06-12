import Image from 'next/image'

import styles from './styles.module.scss'

const Header = () => (
	<div className={`${styles.Header}`}>
		<Image src={'/next.svg'} alt="Picture of the author" width={1920} height={1080} className={styles.logo} />
	</div>
)

export default Header
