import './HeaderContent.css';
import heroes from '../../images/header-heroes.png';
import { ButtonsArea } from '../ButtonsArea/ButtonsArea';
import { headerText } from './headerText';

export const HeaderContent = ({ language }) => {
	return (
		<div className="header_content">
			<div className="layout"></div>
			<div className="back-circles"></div>
			<div className="header-text-area">
				<h1 className="header-title">
					{headerText[language].title1}
					<br />
					{headerText[language].title2}
				</h1>
				<div className="title-line"></div>
				<p className="header-text">{headerText[language].text1}</p>
				<p className="header-text arrow-text">{headerText[language].text2}</p>
				<ButtonsArea language={language} />
			</div>
			<div className="img-area">
				<img className="hero-img" src={heroes} alt="heroes"></img>
			</div>
		</div>
	);
};
