// router/userRouter.jsx
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/page/home/home.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <div>Test</div>,
	},
])

export default router
