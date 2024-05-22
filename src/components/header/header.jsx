import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import styles from './header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<img src='/public/Logo.svg' alt='Logo' className='logo' />
			<form className='search-form'>
				<div className='search-container'>
					<Search className='search-icon' />
					<input type='text' placeholder='Search' className='search-input' />
				</div>
			</form>
			<nav className='navigation'>
				<ul className={styles.navList}>
					<li className='nav-item'>
						<a href='/'>Home</a>
					</li>
					<li className={styles.navItem}>
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

			<div>
				<Heart />
				<ShoppingCart />
				<User />
			</div>
		</header>
	)
}

export default Header
