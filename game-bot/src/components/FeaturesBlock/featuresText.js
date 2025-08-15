import img1 from '../../images/features/облако.png';
import img2 from '../../images/features/автоматизация.jpg';
import img3 from '../../images/features/сбор-ресурсов.jpg';
import img4 from '../../images/features/доступ.jpg';
import img5 from '../../images/features/настройки.png';
import img6 from '../../images/features/комьюнити.jpg';

export const featuresText = {
	ru: {
		title: 'Особенности',
		features: [
			{ text: 'Бот работает полностью в облаке. Не нужно ничего скачивать и устанавливать. Все работает через телеграм',
				image: img1 
			},
			{ text: 'Автоматизация сбора наград, найма юнитов, фарма компании, похода на логова, сбор ресурсов в яме и многое другое', 
				image: img2 
			},
			{
				text: 'Сбор ресурсов на карте мира. Бот умеет определять когда плитка доступна для сбора или уже кто-то выдвинулся на ее сбор. Также бот умеет решать конфликты и отзывать пересекающиеся марши.',
				image: img3,
			},
			{
				text: 'Доступ с любого устройства',
				image: img4,
			},
			{ text: 'Разнообразие настроек позволит вам настроить поведения бота индивидуально', image: img5 },
			{
				text: 'Мы активно развиваем проект, взаимодействуем с комьюнити и добавляем новые механики',
				image: img6,
			},
		],
	},
	en: {
		title: 'Features',
		features: [
			{
				text: 'Fully cloud-based. Nothing to download or configure. Everything works through Telegram',
				image: img1,
			},
			{ text: 'Collecting rewards, recruiting units, campaign farming, lair runs, resource gathering in the pit, and more', 
				image: img2 
			},
			{ text: 'World-map resource gathering: detects when a tile is free or already being taken. It also resolves conflicts and recalls overlapping marches', 
				image: img3 
			},
			{
				text: 'Access from any device',
				image: img4,
			},
			{ text: 'Flexible settings to tailor the bot’s behavior to your playstyle', image: img5 },
			{
				text: 'We’re actively developing the project, engaging with the community, and adding new mechanics regularly',
				image: img6,
			},
		],
	},
};
