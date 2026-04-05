'use client';

import { HeaderNav } from './HeaderNav';
import { HeaderAuth } from './HeaderAuth';
import { HeaderMobile } from './HeaderMobile';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '@/assets/img/icons/site-logo.png';
import { useEffect, useState } from 'react';

export function Header() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);


	const { items } = useCart();

	const totalQuantity = items.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

	const ariaLabel = isHydrated
		? `Корзина, товаров: ${totalQuantity}`
		: 'Корзина'

	return (
		<header className="sticky top-0 z-50 w-full h-16 border-b border-stone-200 bg-stone-100/95 backdrop-blur supports-[backdrop-filter]:bg-stone-100/60 transition-all duration-300">
			<div className="mx-auto px-4 h-16 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2 group">
					<Image
						className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
						src={siteLogo}
						alt="Site logo"
						height={100}
						width={100}
						priority
					/>
					<span className="font-bold text-xl text-stone-800 hidden sm:inline transition-colors duration-300 group-hover:text-amber-600">
						Хмельная Кузня
					</span>
				</Link>

				<HeaderNav />

				<div className="flex items-center gap-2">
					<Link href="/cart">
						<Button 
							variant="ghost" 
							size="icon" 
							className="relative hover:bg-stone-200/50 transition-all duration-300"
							aria-label={ariaLabel}
						>
							<ShoppingCart className="w-5 h-5" />
							{isHydrated && totalQuantity > 0 && (
								<span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white text-xs font-semibold rounded-full flex items-center justify-center animate-in fade-in zoom-in duration-200">
									{totalQuantity > 99 ? '99+' : totalQuantity}
								</span>
							)}
						</Button>
					</Link>

					<div className="hidden lg:block">
						<HeaderAuth/>
					</div>

					<HeaderMobile/>
				</div>
			</div>
		</header>
	);
}