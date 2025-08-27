import './HeaderContent.css';
import heroes from '../../images/header-heroes.png';
import { ButtonsArea } from '../ButtonsArea/ButtonsArea';
import { headerText } from './headerText';

export const HeaderContent = ({ language }) => {
	return (
		<div className="header_content">
			<div className="back-circles"></div>
			<div className="header-text-block">
				<div className="header-text-area">
					<h1 className="header-title">
						{headerText[language].title1}
						<br />
						{headerText[language].title2}
					</h1>
					<div className="title-line"></div>
					<h2 className="header-text">{headerText[language].text}</h2>
					<p className="header-text">{headerText[language].text1}</p>
					<p className="header-text arrow-text">
						{headerText[language].text2}
					</p>
					<ButtonsArea language={language} />
				</div>
				<div className="img-area">
					<img className="hero-img" src={heroes} alt="Бот для Puzzles &amp; Survival"></img>
				</div>
			</div>
		</div>
	);
};
