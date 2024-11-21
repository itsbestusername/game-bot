import './App.css';
import { useState, useEffect } from 'react';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { HeaderContent } from './components/HeaderContent/HeaderContent';
import { FeaturesBlock } from './components/FeaturesBlock/FeaturesBlock';
import { TariffsBlock } from './components/TariffsBlock/TariffsBlock';

function App() {
	const [activeSection, setActiveSection] = useState('home');
	const [language, setLanguage] = useState('ru'); // Общий язык для всего приложения

	useEffect(() => {
		const options = {
			root: null,
			threshold: 0.2,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.id === 'features') {
						setActiveSection('features');
					} else if (entry.target.id === 'home') {
						setActiveSection('home');
					} else if (entry.target.id === 'tariffs') {
						setActiveSection('tariffs');
					}
				}
			});
		}, options);

		const homeSection = document.querySelector('#home');
		const featuresSection = document.querySelector('#features');
		const tariffsSection = document.querySelector('#tariffs');

		if (homeSection) observer.observe(homeSection);
		if (featuresSection) observer.observe(featuresSection);
		if (tariffsSection) observer.observe(tariffsSection);

		// Очистка наблюдателя при размонтировании компонента
		return () => {
			if (homeSection) observer.unobserve(homeSection);
			if (featuresSection) observer.unobserve(featuresSection);
			if (tariffsSection) observer.observe(tariffsSection);
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

				<section id="tariffs">
					<TariffsBlock language={language} />
				</section>
			</main>
		</div>
	);
}

export default App;
