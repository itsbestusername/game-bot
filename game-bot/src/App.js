import './App.css';
import { useState, useEffect } from 'react';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { HeaderContent } from './components/HeaderContent/HeaderContent';
import { FeaturesBlock } from './components/FeaturesBlock/FeaturesBlock';

function App() {
	const [activeSection, setActiveSection] = useState('home');
	const [language, setLanguage] = useState('ru'); // Общий язык для всего приложения

	useEffect(() => {
		const options = {
			root: null,
			threshold: 0.6,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.id === 'features') {
						setActiveSection('features');
					} else if (entry.target.id === 'home') {
						setActiveSection('home');
					}
				}
			});
		}, options);

		const homeSection = document.querySelector('#home');
		const featuresSection = document.querySelector('#features');

		if (homeSection) observer.observe(homeSection);
		if (featuresSection) observer.observe(featuresSection);

		// Очистка наблюдателя при размонтировании компонента
		return () => {
			if (homeSection) observer.unobserve(homeSection);
			if (featuresSection) observer.unobserve(featuresSection);
		};
	}, []);

	return (
		<div className="App">
			<header>
				<HeaderMenu
					activeSection={activeSection}
					language={language}
					onLanguageChange={setLanguage}
				/>
			</header>
			<main>
				<section id="home">
					<HeaderContent language={language} />
				</section>

				<section id="features">
					<FeaturesBlock language={language} />
				</section>
			</main>
		</div>
	);
}

export default App;
