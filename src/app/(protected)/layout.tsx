'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import Sidebar from '@/components/layout/Sidebar/Sidebar'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)


	return (
		<div
			className='ml-50'
		>

			<Sidebar 
				isOpen={isSidebarOpen} 
				onClose={() => setIsSidebarOpen(false)} 
			/>

			{children}
		</div>
	)
}