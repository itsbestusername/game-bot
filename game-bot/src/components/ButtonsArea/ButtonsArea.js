import './ButtonsArea.css';
import { buttonsText } from './buttonsText';

export const ButtonsArea = ({ language }) => {
	return (
		<div className="buttons_area">
			<a
				href="https://t.me/ZeonGameBot"
				className="button button-buy"
				target="_blank"
				rel="noopener noreferrer"
			>
				{buttonsText[language].buy}
			</a>
			<a
				href="https://vk.com/video807566_169118280"
				className="button button-video"
				target="_blank"
				rel="noopener noreferrer"
			>
				{buttonsText[language].watchButton}
			</a>
		</div>
	);
};
