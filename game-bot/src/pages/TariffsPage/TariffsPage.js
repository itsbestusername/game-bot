import { TariffsBlock } from '../../components/TariffsBlock/TariffsBlock';

export const TariffsPage = ({ language }) => {
	return (
		<section className="page">
			<TariffsBlock language={language} />
		</section>
	);
};
