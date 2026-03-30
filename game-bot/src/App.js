import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { FeaturesPage } from './pages/FeaturesPage/FeaturesPage';
import { TariffsPage } from './pages/TariffsPage/TariffsPage';
import { SolverPage } from './pages/SolverPage/SolverPage';
import { TermsPage } from './pages/TermsPage/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage/PrivacyPage';

function App() {
	const [language, setLanguage] = useState('ru');

	return (
		<div className="App">
			<header>
				<HeaderMenu
					language={language}
					onLanguageChange={setLanguage}
				/>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage language={language} />} />
					<Route
						path="/features"
						element={<FeaturesPage language={language} />}
					/>
					<Route
						path="/tariffs"
						element={<TariffsPage language={language} />}
					/>
					<Route path="/solver" element={<SolverPage />} />
					<Route
						path="/terms"
						element={<TermsPage />}
					/>
					<Route
						path="/privacy"
						element={<PrivacyPage />}
					/>
				</Routes>
			</main>
			<Footer language={language} />
		</div>
	);
}

export default App;
