import { useAppDispatch } from '@/store/hooks';
import { fetchUserMe, fetchUserLogout } from '@/store/slices/userSlice';

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const loadUser = () => {
		dispatch(fetchUserMe());
	};

	const logout = () => {
		dispatch(fetchUserLogout());
	};

	return {
		loadUser,
		logout,
	};
};