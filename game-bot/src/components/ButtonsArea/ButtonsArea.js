import './ButtonsArea.css';
import { buttonsText } from './buttonsText';

export const ButtonsArea = ({ language }) => {
	return (
		<div className="buttons_area">
			<button className="button button-buy">{buttonsText[language].buy}</button>
			<button className="button button-video">{buttonsText[language].watchButton}</button>
		</div>
	);
};
