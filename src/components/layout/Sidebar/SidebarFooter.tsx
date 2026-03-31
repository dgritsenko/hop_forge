'use client'

import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useUserActions } from '@/hooks/useUserActions'

export default function SidebarFooter() {
	const { logout } = useUserActions()

	return (
		<div className="mt-auto pt-6 border-t border-stone-200">
			<Button
				onClick={logout}
				variant="ghost"
				className="
					w-full flex items-center gap-3 px-4 py-3
					text-stone-600 font-medium
					hover:bg-red-50 hover:text-red-600
					transition-all duration-300 ease-in-out
					rounded-lg
				"
			>
				<LogOut className="w-5 h-5" />
				<span>Выйти</span>
			</Button>
		</div>
	)
}