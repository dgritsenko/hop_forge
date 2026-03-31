'use client'

import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SidebarNav from './SidebarNav'
import SidebarFooter from './SidebarFooter'

interface SidebarProps {
	isOpen: boolean
	onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0 bg-stone-900/50 z-40 lg:hidden"
					onClick={onClose}
				/>
			)}

			<aside
				className={`
					fixed top-100 left-0 h-full w-72
					bg-stone-200 border-r border-stone-200
					z-50 flex flex-col p-6
					transition-transform duration-300 ease-in-out
					lg:translate-x-0 lg:static lg:z-0
					${isOpen ? 'translate-x-0' : '-translate-x-full'}
				`}
			>
				<div className="flex items-center justify-between mb-8">
					<Button
						onClick={onClose}
						variant="ghost"
						size="icon"
						className="lg:hidden hover:bg-stone-200"
					>
						<X className="w-5 h-5 text-stone-600" />
					</Button>
				</div>

				<SidebarNav />

				<SidebarFooter />
			</aside>
		</>
	)
}