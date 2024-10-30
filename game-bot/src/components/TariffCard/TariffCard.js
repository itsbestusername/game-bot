import './TariffCard.css';

export const TariffCard = ({ tariffData }) => {
	return (
		<div className="tariff_area">
			<div
				className="card_back-block"
				style={{ background: tariffData.background }}
			>
				<p className="card-title">{tariffData.tariffName}</p>
			</div>
			<div className="card_area">
				<ul className="card-list">
					{tariffData.functions.map((func, index) => (
						<li key={index} className="card-item">
							{func.available ? (
								<span className="icon icon-available">&#10004;</span>
							) : (
								<span className="icon">&#10060;</span>
							)}
                            {func.name}{' '}
						</li>
					))}
				</ul>
				<p className="card-price">{tariffData.price}</p>
				<a
                    href="https://t.me/ZeonGameBot"
                    className="button button-buy tariff-button"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {tariffData.button}
                </a>
			</div>
		</div>
	);
};
