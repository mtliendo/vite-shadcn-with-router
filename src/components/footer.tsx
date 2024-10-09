'use client'

import { cn } from '@/lib/utils'

export function Footer() {
	return (
		<footer
			className={cn(
				'flex items-center justify-center p-4',
				'bg-muted text-muted-foreground text-sm'
			)}
		>
			<p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
		</footer>
	)
}
