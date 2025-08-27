import './ButtonsArea.css';
import { buttonsText,  } from './buttonsText';

export const ButtonsArea = ({ language }) => {
	return (
		<div className="buttons_area">
			<a
				href="https://t.me/zeon_game_bot"
				className="button button-buy"
				target="_blank"
				rel="noopener noreferrer"
			>
				{buttonsText[language].buy}
			</a>
			<a
				href={buttonsText[language].docLink}
				className="button button-video"
				target="_blank"
                rel="noopener noreferrer"
			>
				{buttonsText[language].watchButton}
			</a>
		</div>
	);
};
