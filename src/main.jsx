import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import UserLayout from './components/userLayout.jsx'
import './index.css'
import router from './router/userRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserLayout>
			<RouterProvider router={router} />
		</UserLayout>
	</React.StrictMode>
)
