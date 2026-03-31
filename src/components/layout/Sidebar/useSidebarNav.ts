'use client'

import { useState } from 'react'

export default function useSidebarNav() {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(prev => !prev)
	const close = () => setIsOpen(false)
	const open = () => setIsOpen(true)

	return {
		isOpen,
		toggle,
		close,
		open,
	}
}