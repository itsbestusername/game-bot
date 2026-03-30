import './HeaderMenu.css';
import { NavLink } from 'react-router-dom';
import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown';
import { menuText } from './menuText';

export const HeaderMenu = ({ language, onLanguageChange }) => {
	return (
		<nav className="header-container">
			<NavLink to="/" className="header-logo">
				ЗЕОН
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
			<LanguageDropdown
				language={language}
				onLanguageChange={onLanguageChange}
			/>
		</nav>
	);
};
