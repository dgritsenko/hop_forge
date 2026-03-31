import { useAppDispatch } from '@/store/hooks';
import { fetchUserMe, fetchUserLogout, updateProfile, changePassword } from '@/store/slices/userSlice';
import { IProfileForm, IPasswordChangeForm } from '@/lib/validators';

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const loadUser = () => {
		dispatch(fetchUserMe());
	};

	const logout = () => {
		dispatch(fetchUserLogout());
	};

	const updateUserData = (data: Partial<IProfileForm>) => {
		return dispatch(updateProfile(data));
	};

	const updateUserPassword = (data: IPasswordChangeForm) => {
		return dispatch(changePassword(data));
	};

	return {
		loadUser,
		logout,
		updateUserData,
		updateUserPassword,
	};
};