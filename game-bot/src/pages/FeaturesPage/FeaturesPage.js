import { FeaturesBlock } from '../../components/FeaturesBlock/FeaturesBlock';

export const FeaturesPage = ({ language }) => {
	return (
		<section className="page">
			<FeaturesBlock language={language} />
		</section>
	);
};
