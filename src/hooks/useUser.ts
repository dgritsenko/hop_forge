'use client'
import { useAppSelector } from '@/store/hooks';
import { selectUser, selectIsAuthenticated, selectUserLoading, selectUserError } from '@/store/slices/userSlice';
import { useState } from 'react';

export const useUser = () => {
	const user = useAppSelector(selectUser);
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const loading = useAppSelector(selectUserLoading);
	const error = useAppSelector(selectUserError);

	return {
		user,
		isAuthenticated,
		loading,
		error,
	};
};