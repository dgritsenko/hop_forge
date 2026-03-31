'use client'

import ProfileForm from "@/components/pages/profile/ProfileForm"
import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProfilePage() {
	const { isAuthenticated, loading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !isAuthenticated) {
			router.push('/auth/login');
		}
	}, [isAuthenticated, loading, router]);

	if (loading) {
		return <div className="w-100 h-100 flex justify-center items-center">Загрузка...</div>;
	}

	if (!isAuthenticated) {
		return null;
	}

	return (
		<div className="w-full">
			<h1 className="text-3xl font-bold text-center mt-10">Профиль пользователя</h1>
			<ProfileForm />
		</div>
	);
}