import { HeaderProps } from './props';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Button, Htag, ThemeSwitch } from '../UI';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const handleSignOut = () => {
		signOut(auth);
	};

	return (
		<header className={cn(className, styles.todoHeader)} {...props}>
			<Link to='/'>
				<Htag tag='h3'>Home</Htag>
			</Link>
			<div className={styles.todoHeader__buttons}>
				<ThemeSwitch />
				<Button appearance='primary' onClick={handleSignOut}>
					SignOut
				</Button>
			</div>
		</header>
	);
};
