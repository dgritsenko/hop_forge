'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import useSidebarNav from '@/components/layout/Sidebar/useSidebarNav'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { isAuthenticated, loading } = useUser()
	const router = useRouter()
	const { isOpen, toggle, close } = useSidebarNav()

	useEffect(() => {
		if (!loading && !isAuthenticated) {
			router.push('/auth/login')
		}
	}, [isAuthenticated, loading, router])

	if (loading) {
		return (
			<div className="w-full h-screen flex justify-center items-center bg-stone-50">
				<div className="text-stone-600 text-lg">Загрузка...</div>
			</div>
		)
	}

	if (!isAuthenticated) {
		return null
	}

	return (
		<div className="flex min-h-screen bg-stone-50">
			<Sidebar isOpen={isOpen} onClose={close} />

			<div className="flex-1 flex flex-col">
				<header className="lg:hidden bg-stone-100 border-b border-stone-200 p-4">
					<Button
						onClick={toggle}
						variant="ghost"
						size="icon"
						className="hover:bg-stone-200"
					>
						<Menu className="w-6 h-6 text-stone-700" />
					</Button>
				</header>

				<main className="flex-1 p-6 lg:p-8">
					{children}
				</main>
			</div>
		</div>
	)
}