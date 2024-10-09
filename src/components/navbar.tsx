'use client'

import { useAuthenticator } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Navbar() {
	const { user, signOut } = useAuthenticator((context) => [context.user])

	return (
		<nav
			className={cn(
				'flex items-center justify-between',
				'bg-primary text-primary-foreground',
				'px-8 py-4'
			)}
		>
			<div className="flex-1">
				<Link
					to="/"
					className="text-xl font-bold hover:opacity-80 transition-opacity"
				>
					Focus Otter
				</Link>
			</div>
			<ul className="flex space-x-4">
				<li>
					<Link to="/protected" className="hover:underline transition-all">
						Protected
					</Link>
				</li>
				{user && (
					<li>
						<Button
							variant="ghost"
							onClick={signOut}
							className="text-primary-foreground hover:text-primary-foreground/80"
						>
							Sign Out
						</Button>
					</li>
				)}
			</ul>
		</nav>
	)
}
