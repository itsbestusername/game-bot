import { useState, useEffect, useRef } from 'react';
import './HeaderMenu.css';
import { NavLink, Link } from 'react-router-dom';
import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown';
import { menuText } from './menuText';

export const HeaderMenu = ({ language, onLanguageChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const closeMenu = () => setIsOpen(false);

	return (
		<nav className="header-container" ref={navRef}>
			<NavLink to="/" className="header-logo">
				{menuText[language].logo}
			</NavLink>
			<ul className="menu-list">
				<li className="menu-list-item">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? 'active' : '')}
						end
					>
						{menuText[language].home}
					</NavLink>
				</li>
				<li className="menu-list-item">
					<NavLink
						to="/features"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						{menuText[language].features}
					</NavLink>
				</li>
				<li className="menu-list-item">
					<NavLink
						to="/tariffs"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						{menuText[language].tariffs}
					</NavLink>
				</li>
				<li className="menu-list-item">
					<NavLink
						to="/solver"
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						{menuText[language].solver}
					</NavLink>
				</li>
			</ul>
			<div className="header-right">
				<a
					href="https://t.me/zeon_game_bot"
					className="header-login-btn"
					target="_blank"
					rel="noopener noreferrer"
				>
					{menuText[language].login}
				</a>
				<LanguageDropdown
					language={language}
					onLanguageChange={onLanguageChange}
				/>
				<button
					className={`hamburger-btn${isOpen ? ' open' : ''}`}
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Меню"
				>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
				</button>
			</div>
			{isOpen && (
				<div className="mobile-nav">
					<ul className="mobile-nav-list">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? 'active' : '')}
								end
								onClick={closeMenu}
							>
								{menuText[language].home}
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/features"
								className={({ isActive }) => (isActive ? 'active' : '')}
								onClick={closeMenu}
							>
								{menuText[language].features}
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/tariffs"
								className={({ isActive }) => (isActive ? 'active' : '')}
								onClick={closeMenu}
							>
								{menuText[language].tariffs}
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/solver"
								className={({ isActive }) => (isActive ? 'active' : '')}
								onClick={closeMenu}
							>
								{menuText[language].solver}
							</NavLink>
						</li>
						<li className="mobile-nav-divider">
							<Link to="/terms" onClick={closeMenu}>
								{menuText[language].terms}
							</Link>
						</li>
						<li>
							<Link to="/privacy" onClick={closeMenu}>
								{menuText[language].privacy}
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};
