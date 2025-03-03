import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export default function RootLayout() {
	return (
		<div className="flex flex-col h-screen">
			<header className="header">
				<Navbar />
			</header>
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
