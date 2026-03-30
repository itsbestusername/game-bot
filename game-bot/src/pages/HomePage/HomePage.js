import { HeaderContent } from '../../components/HeaderContent/HeaderContent';

export const HomePage = ({ language }) => {
	return (
		<section className="page">
			<HeaderContent language={language} />
		</section>
	);
};
