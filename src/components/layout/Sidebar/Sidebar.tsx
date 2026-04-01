'use client'

import SidebarNav from './SidebarNav'

export default function Sidebar() {
	return (
		<>


			<aside
				className={`
					fixed top-0 left-0 h-full
					bg-stone-100 border-r border-stone-200
					z-40 p-6
					transition-transform duration-300 ease-in-out
				`}
			>

				<SidebarNav />
			</aside>
		</>
	)
}