'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
	Beer, 
	Package, 
	ShoppingCart, 
	User, 
} from 'lucide-react'

const navItems = [
	{
		href: '/constructor',
		label: 'Кузня пива',
		icon: Beer,
	},
	{
		href: '/catalog',
		label: 'Каталог',
		icon: Package,
	},
	{
		href: '/order',
		label: 'Заказы',
		icon: ShoppingCart,
	},
	{
		href: '/profile',
		label: 'Профиль',
		icon: User,
	},
]

export default function SidebarNav() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col gap-2">
			{navItems.map((item) => {
				const Icon = item.icon
				const isActive = pathname === item.href

				return (
					<Link
						key={item.href}
						href={item.href}
						className={`
							flex items-center gap-3 px-4 py-3 rounded-lg
							text-stone-700 font-medium
							transition-all duration-300 ease-in-out
							${isActive 
								? 'bg-amber-100 text-amber-700' 
								: 'hover:bg-stone-100 hover:text-amber-600'
							}
						`}
					>
						<Icon className="w-5 h-5" />
						<span className="text-base">{item.label}</span>
					</Link>
				)
			})}
		</nav>
	)
}