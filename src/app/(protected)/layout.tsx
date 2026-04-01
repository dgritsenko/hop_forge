'use client'

import Sidebar from '@/components/layout/Sidebar/Sidebar'


export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode
}) {


	return (
		<div
			className='ml-50'
		>

			<Sidebar/>

			{children}
		</div>
	)
}