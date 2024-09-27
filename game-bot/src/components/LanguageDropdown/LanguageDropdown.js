import React, { useState } from 'react';
import './LanguageDropdown.css';
import rusFlag from '../../images/rus.svg';
import usaFlag from '../../images/usa.png'; // Добавляем изображение флага США

export const LanguageDropdown = ({ language, onLanguageChange }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Переключение состояния открытия/закрытия выпадающего списка
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleLanguageSelect = (lang) => {
		onLanguageChange(lang);
		setIsDropdownOpen(false); // Закрываем список после выбора
	};

	return (
		<div className="language-dropdown">
			<div className="selected-language" onClick={toggleDropdown}>
				{/* Отображаем выбранный язык */}
				{language === 'ru' ? (
					<>
						<img
							src={rusFlag}
							alt="Russian Flag"
							className="flag-icon"
						/>
						<p className="language-name">RU</p>
					</>
				) : (
					<>
						<img
							src={usaFlag}
							alt="USA Flag"
							className="flag-icon"
						/>
						<p className="language-name">ENG</p>
					</>
				)}
				<span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
			</div>

			{isDropdownOpen && (
				<div className="dropdown-menu">
					<div
						className={`dropdown-item ${language === 'ru' ? 'selected' : ''}`}
						onClick={() => handleLanguageSelect('ru')}
					>
						<img
							src={rusFlag}
							alt="Russian Flag"
							className="flag-icon"
						/>
						RU
					</div>
					<div
						className={`dropdown-item ${language === 'en' ? 'selected' : ''}`}
						onClick={() => handleLanguageSelect('en')}
					>
						<img
							src={usaFlag}
							alt="USA Flag"
							className="flag-icon"
						/>
						ENG
					</div>
				</div>
			)}
		</div>
	);
};
