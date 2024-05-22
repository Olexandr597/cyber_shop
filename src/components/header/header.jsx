import { Search } from 'lucide-react'

const Header = () => {
	return (
		<header className='header'>
			<img src='/public/Logo.svg' alt='Logo' className='logo' />
			<form className='search-form'>
				<div className='search-container'>
					<Search className='search-icon' />
					<input type='text' placeholder='Search' className='search-input' />
				</div>
			</form>
			<nav className='navigation'>
				<ul className='nav-list'>
					<li className='nav-item'>
						<a href='/'>Home</a>
					</li>
					<li className='nav-item'>
						<a href='/about'>About</a>
					</li>
					<li className='nav-item'>
						<a href='/contact'>Contact Us</a>
					</li>
					<li className='nav-item'>
						<a href='/blog'>Blog</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
