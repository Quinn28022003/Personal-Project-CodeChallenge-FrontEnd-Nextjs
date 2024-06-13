import Image from 'next/image'

import BtnAuth from '@/components/Header/BtnAuth'
import BtnNotification from '@/components/Header/BtnNotification'
import BtnSearch from '@/components/Header/BtnSearch'
import SwitchComponent from '@/components/Switch'
import styles from './styles.module.scss'

export enum Role {
	STUDENT = 'student',
	REVIEWER = 'reviewer',
	ADMIN = 'admin'
}
export enum Gender {
	MALE = 'male',
	FEMALE = 'female',
	OTHER = 'other'
}

export interface INotification {
	_id?: string
	title: string
	sender: string
	receiver: string
	idRequest: string
	path: string
	deleted: boolean
	deletedAt: Date
	createdAt?: Date
}

export interface IUsersConvert {
	fullName: string
	role: Role
	dateOfBirth: string
	description?: string
	gender: Gender
	socialAccounts?: string[]
	completedChallenges?: string
	notifications?: string | INotification[]
	response?: string[]
	message?: string[]
	rating?: number
	imagePath: string
	friends?: string[]
	online: boolean
	deleted: boolean
	deletedAt: Date
	createdAt?: string
}

export interface userList {
	message: string
	data: IUsersConvert[]
}

const Header = async () => {
	const res: Response = await fetch('http://localhost:2802/users', {
		method: 'GET'
	})
	const initialData: userList = (await res.json()) as userList

	return (
		<div className={`${styles.Header} dark:bg-darkMode`}>
			<Image
				src={'/Assets/Logo/logo_codeChallenge.png'}
				alt="Picture of the author"
				width={1920}
				height={1080}
				className={styles.logo}
				priority={true}
			/>
			<div className={styles.contentBetween}>
				<SwitchComponent />
			</div>
			<div className={styles.contentRight}>
				<BtnNotification initialData={initialData} />
				<BtnSearch />
				<BtnAuth />
			</div>
		</div>
	)
}

export default Header
