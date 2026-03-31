import './Footer.css';
import { Link } from 'react-router-dom';
import { footerText } from './footerText';

export const Footer = ({ language }) => {
	const text = footerText[language];

	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-links">
					<Link to="/terms" className="footer-link">
						{text.terms}
					</Link>
					<Link to="/privacy" className="footer-link">
						{text.privacy}
					</Link>
				</div>
				<div className="footer-info-left">
					<p className="footer-text">Самозанятый: Ким Е.А.</p>
					<p className="footer-text">ИНН: 100128640335</p>
				</div>
				<div className="footer-info-right">
					<p className="footer-text">
						<a
							href="mailto:support@zeonbot.com"
							className="footer-link"
						>
							support@zeonbot.com
						</a>
					</p>
					<p className="footer-text">&copy; 2025 ЗЕОН</p>
				</div>
			</div>
		</footer>
	);
};
