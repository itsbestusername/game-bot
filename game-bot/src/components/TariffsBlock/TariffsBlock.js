import './TariffsBlock.css';
import { TariffCard } from '../TariffCard/TariffCard';
import { tariffsText, tariffDataMini, tariffDataStandart, tariffDataPremium } from './tariffsText';

export const TariffsBlock = ({language}) => {
    return (
        <div className='tariffs_block'>
            <div className="tariffs-layout"></div>
            <div className="back-tariffs-circles"></div>
            <h1 className="tariffs-title">
				{tariffsText[language].title}
			</h1>
			<div className="tariffs-text-area">
                <TariffCard language={language} tariffData={tariffDataMini[language]} />
                <TariffCard language={language} tariffData={tariffDataStandart[language]} />
                <TariffCard language={language} tariffData={tariffDataPremium[language]} />
            </div>
        </div>
    )
}