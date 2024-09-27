import './HeaderMenu.css';
import { LanguageDropdown } from '../LanguageDropdown/LanguageDropdown';
import { menuText } from './menuText';

export const HeaderMenu = ({ activeSection, language, onLanguageChange }) => {
	return (
		<nav className="header-container">
			<p className="header-logo">ZEON</p>
			<ul className="menu-list">
				<li className="menu-list-item">
					<a
						className={activeSection === 'home' ? 'active' : ''}
						href="#home"
					>
						{menuText[language].home}
					</a>
				</li>
				<li className="menu-list-item">
					<a
						className={activeSection === 'features' ? 'active' : ''}
						href="#features"
					>
						{menuText[language].features}
					</a>
				</li>
			</ul>
			<LanguageDropdown
				language={language}
				onLanguageChange={onLanguageChange}
			/>
		</nav>
	);
};
