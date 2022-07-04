import { onAuthStateChanged } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebaseConfig';
import { AuthContext } from '../../context/auth.context';
import User from '../../interfaces/user.interface';

export interface IAuthRouteProps {
	children: ReactNode;
}

const AuthRoute = ({ children }: IAuthRouteProps) => {
	const [user, setUser] = useState<User>({ uid: '', email: '' });

	const navigate = useNavigate();

	useEffect(() => {
		return onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user?.email,
				});
			} else {
				console.log('Unauthorized');
				setUser({
					uid: '',
					email: '',
				});
				navigate('/signin');
			}
		});
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthRoute;
