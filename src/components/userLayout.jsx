import Footer from './footer/footer.jsx'
import Header from './header/header.jsx'

const UserLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default UserLayout
