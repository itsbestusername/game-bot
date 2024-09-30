import './FeaturesBlock.css';
import { useState, useEffect } from 'react';
// import rightArrow from '../../images/black right arrow.png';
// import leftArrow from '../../images/black left arrow.png';
import { ButtonsArea } from '../ButtonsArea/ButtonsArea';
import { featuresText } from './featuresText';

export const FeaturesBlock = ({ language }) => {
	// Состояние для текущего слайда
	const [currentSlide, setCurrentSlide] = useState(0);

	// Общее количество слайдов (функций)
	const totalSlides = featuresText[language].features.length;

	// Функции для смены слайдов
	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
			prevSlide === 0 ? totalSlides - 1 : prevSlide - 1,
		);
	};

	// Данные текущего слайда
	const currentFeature = featuresText[language].features[currentSlide];

	// Автоматическая смена слайдов (опционально)
	useEffect(() => {
		const interval = setInterval(nextSlide, 3000); // Смена каждые 3 секунд
		return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
	}, [currentSlide]);

	return (
		<div className="features-block">
			<div className="girl-background"></div>
			<div className="features-background"></div>
			<div className="features-img">
				{/* Отображение текущего слайда */}
				<img
					className="phone-image"
					src={currentFeature.image} // Отображение изображения текущего слайда
					alt={`Slide ${currentSlide + 1}`}
				/>
				{/* <div className="arrow_area">
					<button className="arrow_area-button">
						<img
							className="arrow-img"
							src={leftArrow}
							alt="leftArrow"
						></img>
					</button>
					<button className="arrow_area-button">
						<img
							className="arrow-img"
							src={rightArrow}
							alt="rightArrow"
						></img>
					</button>
				</div> */}
			</div>
			<div className="features-content">
				<h2 className="features-title">
					{featuresText[language].title}
				</h2>
				<ul className="features-list">
					{featuresText[language].features.map((feature, index) => (
						<li
							key={index}
							className={`features-list-item ${
								index === currentSlide ? 'active' : ''
							}`}
						>
							{feature.text}
						</li>
					))}
				</ul>
				<ButtonsArea language={language} />
			</div>
		</div>
	);
};
