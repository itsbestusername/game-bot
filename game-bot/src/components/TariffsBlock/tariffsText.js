export const tariffsText = {
    ru: {
		title: 'Тарифы',
	},
	en: {
		title: 'Tariffs',
	},
}

export const tariffDataMini = {
    ru: {
		background: "linear-gradient(45deg, #9296D5, #4C4E6F)",
        tariffName: "mini",
        functions: [
			{ name: "Весь функционал бота", available: true },
			{ name: "Запуск из телеграма", available: true },
			{ name: "Техподдержка", available: true },
			{ name: "Запуск по расписанию", available: false },
			{ name: "Расширенный отчет о работе", available: false },
			{ name: "Улучшенная оптимизация", available: false },
		],
        price: "3000 руб",
		button: "Подробнее"
    },
    en: {
		background: "linear-gradient(45deg,  #9296D5, #4C4E6F)",
        tariffName: "mini",
        functions: [
			{ name: "All bot functionality", available: true },
			{ name: "Start from telegram", available: true },
			{ name: "Technical support", available: true },
			{ name: "Scheduled launch", available: false },
			{ name: "Extended work report", available: false },
			{ name: "Improved optimization", available: false },
		],
        price: "30 USD",
		button: "more details"
    }
};

export const tariffDataStandart = {
    ru: {
		background: "linear-gradient(45deg, #BA7DCB, #4C4E6F)",
        tariffName: "standart",
        functions: [
			{ name: "Весь функционал бота", available: true },
			{ name: "Запуск из телеграма", available: true },
			{ name: "Техподдержка", available: true },
			{ name: "Запуск по расписанию", available: true },
			{ name: "Расширенный отчет о работе", available: false },
			{ name: "Улучшенная оптимизация", available: false },
		],
        price: "5000 руб",
		button: "Подробнее"
    },
    en: {
		background: "linear-gradient(45deg,   #BA7DCB, #4C4E6F)",
        tariffName: "standart",
        functions: [
			{ name: "All bot functionality", available: true },
			{ name: "Start from telegram", available: true },
			{ name: "Technical support", available: true },
			{ name: "Scheduled launch", available: true },
			{ name: "Extended work report", available: false },
			{ name: "Improved optimization", available: false },
		],
        price: "50 USD",
		button: "more details"
    }
};

export const tariffDataPremium = {
    ru: {
		background: "linear-gradient(45deg, #82C380, #515B61)",
        tariffName: "premium",
        functions: [
			{ name: "Весь функционал бота", available: true },
			{ name: "Запуск из телеграма", available: true },
			{ name: "Техподдержка", available: true },
			{ name: "Запуск по расписанию", available: true },
			{ name: "Расширенный отчет о работе", available: true },
			{ name: "Улучшенная оптимизация", available: true },
		],
        price: "9000 руб",
		button: "Подробнее"
    },
    en: {
		background: "linear-gradient(45deg,  #82C380, #515B61)",
        tariffName: "premium",
        functions: [
			{ name: "All bot functionality", available: true },
			{ name: "Start from telegram", available: true },
			{ name: "Technical support", available: true },
			{ name: "Scheduled launch", available: true },
			{ name: "Extended work report", available: true },
			{ name: "Improved optimization", available: true },
		],
        price: "90 USD",
		button: "more details"
    }
};