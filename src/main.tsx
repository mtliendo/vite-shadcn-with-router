import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage.tsx'
import RootLayout from './layouts/RootLayout.tsx'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import './index.css'
import ProtectedLayout from './layouts/ProtectedLayout.tsx'
import ProtectedPage from './routes/ProtectedPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				element: <ProtectedLayout />,
				path: 'protected',
				children: [
					{
						index: true,
						element: <ProtectedPage />,
					},
				],
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Authenticator.Provider>
			<RouterProvider router={router} />
		</Authenticator.Provider>
	</StrictMode>
)
