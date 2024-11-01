import img1 from '../../images/features/1.jpg';
import img2 from '../../images/features/2.jpg';
import img3 from '../../images/features/3.jpg';
import img4 from '../../images/features/4.jpg';
import img5 from '../../images/features/5.jpg';
import img6 from '../../images/features/6.jpg';
import img7 from '../../images/features/7.jpg';

export const featuresText = {
	ru: {
		title: 'Функционал',
		features: [
			{ text: 'Автоматический сбор ресурсов на карте мира', image: img1 },
			{ text: 'Походы на логово зомби', image: img2 },
			{
				text: 'Повторные прохождения уровней для получения ресурсов',
				image: img3,
			},
			{
				text: 'Полив и удобрение грядок союзников в теплице',
				image: img4,
			},
			{ text: 'Сбор ресурсов в яме', image: img5 },
			{
				text: 'Индивидуальная настройка работы бота с  любыми параметрами',
				image: img6,
			},
			{
				text: 'Найм бесплатных героев в таверне, прохождение викторин и многое другое',
				image: img7,
			},
		],
		watchButton: 'Посмотреть видео',
	},
	en: {
		title: 'Features',
		features: [
			{
				text: 'Automatic resource collection on the world map',
				image: img1,
			},
			{ text: 'Hiking to the Zombie Lair', image: img2 },
			{ text: 'Replay levels to get resources', image: img3 },
			{
				text: 'Watering and fertilizing the allied beds in the greenhouse',
				image: img4,
			},
			{ text: 'Collecting resources in the pit', image: img5 },
			{
				text: 'Individual configuration of the bot with any parameters',
				image: img6,
			},
			{
				text: 'Hire free heroes in the tavern, take quizzes and more',
				image: img7,
			},
		],
		watchButton: 'Watch video',
	},
};
