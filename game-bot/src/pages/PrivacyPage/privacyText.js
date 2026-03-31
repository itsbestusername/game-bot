export const privacyContent = {
  ru: {
    title: 'Политика обработки персональных данных',
    date: 'Редакция от 26.03.2026',
    sections: [
      {
        title: '1. Общие положения',
        items: [
          {
            type: 'p',
            text: '1.1. Настоящая Политика обработки персональных данных (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сервиса «ZeonBot» (далее — «Сервис»).',
          },
          {
            type: 'p',
            parts: [
              { text: '1.2. ' },
              { text: 'Оператор персональных данных:', bold: true },
              {
                text: ' самозанятый Ким Екатерина Александровна, ИНН 100128640335, г. Санкт-Петербург (далее — «Оператор»).',
              },
            ],
          },
          {
            type: 'p',
            text: '1.3. Политика разработана в соответствии с:',
          },
          {
            type: 'list',
            items: [
              'Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» (далее — «152-ФЗ»);',
              'Постановлением Правительства РФ от 01.11.2012 № 1119 «Об утверждении требований к защите персональных данных при их обработке в информационных системах персональных данных»;',
              'иными нормативными актами Российской Федерации в области защиты персональных данных.',
            ],
          },
          {
            type: 'p',
            text: '1.4. Настоящая Политика является неотъемлемой частью Договора-оферты на оказание услуг, размещённого на сайте https://zeonbot.com.',
          },
          {
            type: 'p',
            text: '1.5. Используя Сервис и/или предоставляя свои персональные данные, пользователь (далее — «Субъект») выражает согласие с условиями настоящей Политики. Если Субъект не согласен с условиями Политики, он обязан прекратить использование Сервиса.',
          },
        ],
      },
      {
        title: '2. Категории субъектов персональных данных',
        items: [
          {
            type: 'p',
            text: '2.1. Оператор обрабатывает персональные данные следующих категорий субъектов:',
          },
          {
            type: 'list',
            items: [
              'пользователи (заказчики) Сервиса — физические лица, использующие функциональные возможности Сервиса на условиях подписки.',
            ],
          },
        ],
      },
      {
        title: '3. Персональные данные, которые обрабатываются',
        items: [
          {
            type: 'p',
            text: '3.1. Оператор обрабатывает следующие категории персональных данных:',
          },
          {
            type: 'h3',
            text: 'Данные, предоставленные Субъектом:',
          },
          {
            type: 'list',
            items: [
              'адрес электронной почты (email);',
              'идентификатор Telegram (Telegram ID);',
              'имя пользователя (username) в Telegram (при наличии).',
            ],
          },
          {
            type: 'h3',
            text: 'Данные, получаемые автоматически при использовании Сервиса:',
          },
          {
            type: 'list',
            items: [
              'IP-адрес;',
              'данные файлов cookie;',
              'тип и версия браузера, операционная система;',
              'дата и время обращения к Сервису;',
              'действия пользователя в Сервисе (логи использования).',
            ],
          },
          {
            type: 'h3',
            text: 'Данные, получаемые от третьих лиц:',
          },
          {
            type: 'list',
            items: [
              'данные о платежах от платёжного сервиса ООО «РОБОКАССА» (факт оплаты, сумма, дата, способ оплаты, идентификатор транзакции).',
            ],
          },
          {
            type: 'h3',
            text: 'Данные, которые Оператор НЕ собирает и НЕ хранит:',
          },
          {
            type: 'list',
            items: [
              'данные банковских карт (обрабатываются непосредственно ООО «РОБОКАССА»);',
              'паспортные данные;',
              'учётные данные Субъекта от сторонних сервисов (игровые аккаунты и т.п.) — данные, которые Субъект предоставляет в процессе использования Сервиса для выполнения автоматизации, не сохраняются Оператором на постоянной основе.',
            ],
          },
        ],
      },
      {
        title: '4. Цели и правовые основания обработки',
        items: [
          {
            type: 'p',
            text: '4.1. Оператор обрабатывает персональные данные в следующих целях:',
          },
          {
            type: 'table',
            headers: ['Цель обработки', 'Правовое основание', 'Какие данные'],
            rows: [
              [
                'Исполнение договора-оферты (предоставление доступа к Сервису)',
                'п. 5 ч. 1 ст. 6 152-ФЗ (исполнение договора)',
                'Email, Telegram ID',
              ],
              [
                'Идентификация Субъекта при использовании Сервиса',
                'п. 5 ч. 1 ст. 6 152-ФЗ (исполнение договора)',
                'Telegram ID, username',
              ],
              [
                'Обработка платежей и ведение учёта',
                'п. 5 ч. 1 ст. 6 152-ФЗ (исполнение договора)',
                'Email, данные о платежах',
              ],
              [
                'Связь с Субъектом (техническая поддержка, уведомления)',
                'п. 5 ч. 1 ст. 6 152-ФЗ (исполнение договора)',
                'Email, Telegram ID',
              ],
              [
                'Формирование чеков и передача данных в ФНС через «Мой налог»',
                'п. 2 ч. 1 ст. 6 152-ФЗ (исполнение обязанности по закону — НК РФ, 422-ФЗ)',
                'Email, сумма, описание услуги',
              ],
              [
                'Обеспечение безопасности и предотвращение злоупотреблений',
                'п. 5 ч. 1 ст. 6 152-ФЗ (исполнение договора)',
                'IP-адрес, логи использования',
              ],
              [
                'Улучшение работы Сервиса и анализ использования',
                'Согласие Субъекта (п. 1 ч. 1 ст. 6 152-ФЗ, ст. 9 152-ФЗ)',
                'Cookies, данные браузера, логи',
              ],
            ],
          },
        ],
      },
      {
        title: '5. Способы обработки персональных данных',
        items: [
          {
            type: 'p',
            text: '5.1. Обработка осуществляется с использованием средств автоматизации.',
          },
          {
            type: 'p',
            text: '5.2. Обработка включает: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.',
          },
          {
            type: 'p',
            text: '5.3. Оператор не осуществляет обработку специальных категорий персональных данных (ст. 10 152-ФЗ) и биометрических персональных данных (ст. 11 152-ФЗ).',
          },
        ],
      },
      {
        title: '6. Передача персональных данных третьим лицам',
        items: [
          {
            type: 'p',
            text: '6.1. Оператор передаёт персональные данные следующим третьим лицам:',
          },
          {
            type: 'table',
            headers: [
              'Получатель',
              'Цель передачи',
              'Какие данные',
              'Правовое основание',
            ],
            rows: [
              [
                'ООО «РОБОКАССА» (платёжный сервис)',
                'Обработка платежей',
                'Email, идентификатор заказа, сумма',
                'Исполнение договора',
              ],
              [
                'ФНС России (через «Мой налог»)',
                'Формирование чеков, налоговый учёт',
                'Email, сумма, описание услуги',
                'Исполнение обязанности по закону (НК РФ, 422-ФЗ)',
              ],
              [
                'Хостинг-провайдер',
                'Хранение и обработка данных Сервиса',
                'Все данные (в зашифрованном виде)',
                'Исполнение договора (поручение обработки, ч. 3 ст. 6 152-ФЗ)',
              ],
            ],
          },
          {
            type: 'p',
            parts: [
              { text: '6.2. Оператор ' },
              { text: 'не продаёт', bold: true },
              { text: ' и ' },
              { text: 'не передаёт', bold: true },
              {
                text: ' персональные данные третьим лицам в маркетинговых или рекламных целях.',
              },
            ],
          },
          {
            type: 'p',
            text: '6.3. Оператор может передать персональные данные по запросу уполномоченных государственных органов РФ в случаях, предусмотренных законодательством (п. 2 ч. 1 ст. 6 152-ФЗ).',
          },
        ],
      },
      {
        title: '7. Трансграничная передача персональных данных',
        items: [
          {
            type: 'p',
            text: '7.1. Серверы, на которых размещён Сервис, могут находиться за пределами Российской Федерации.',
          },
          {
            type: 'p',
            text: '7.2. Трансграничная передача персональных данных осуществляется в соответствии с требованиями ст. 12 152-ФЗ и только в страны, являющиеся участниками Конвенции Совета Европы о защите физических лиц при автоматизированной обработке персональных данных (Конвенция № 108), а также в иные страны, обеспечивающие адекватную защиту прав субъектов персональных данных.',
          },
          {
            type: 'p',
            text: '7.3. Первичная запись, систематизация и хранение персональных данных граждан Российской Федерации осуществляется с использованием баз данных, расположенных на территории Российской Федерации (ч. 5 ст. 18 152-ФЗ).',
          },
        ],
      },
      {
        title: '8. Сроки хранения персональных данных',
        items: [
          {
            type: 'p',
            text: '8.1. Персональные данные хранятся в течение всего периода использования Сервиса Субъектом.',
          },
          {
            type: 'p',
            parts: [
              {
                text: '8.2. После прекращения использования Сервиса персональные данные хранятся в течение ',
              },
              { text: '1 (одного) года', bold: true },
              { text: ', после чего уничтожаются.' },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: '8.3. Данные о платежах хранятся в течение ' },
              { text: '5 (пяти) лет', bold: true },
              {
                text: ' в соответствии с требованиями налогового законодательства Российской Федерации.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: '8.4. При отзыве согласия на обработку персональных данных Оператор прекращает обработку и уничтожает данные в срок не более ',
              },
              { text: '30 (тридцати) календарных дней', bold: true },
              {
                text: ', за исключением данных, обработка которых необходима для исполнения требований законодательства (п. 8.3).',
              },
            ],
          },
        ],
      },
      {
        title: '9. Порядок уничтожения персональных данных',
        items: [
          {
            type: 'p',
            text: '9.1. Уничтожение персональных данных осуществляется путём безвозвратного удаления записей из баз данных Сервиса.',
          },
          {
            type: 'p',
            text: '9.2. По факту уничтожения персональных данных Оператор составляет акт об уничтожении (при запросе Субъекта).',
          },
          {
            type: 'p',
            text: '9.3. Уничтожение производится в следующих случаях:',
          },
          {
            type: 'list',
            items: [
              'по истечении сроков хранения (раздел 8);',
              'по заявлению Субъекта об отзыве согласия;',
              'по достижении цели обработки;',
              'при выявлении неправомерной обработки — в срок не более 10 рабочих дней.',
            ],
          },
        ],
      },
      {
        title: '10. Защита персональных данных',
        items: [
          {
            type: 'p',
            text: '10.1. Оператор принимает организационные и технические меры для защиты персональных данных в соответствии со ст. 19 152-ФЗ, в том числе:',
          },
          {
            type: 'list',
            items: [
              'использование защищённых протоколов передачи данных (HTTPS/TLS);',
              'ограничение круга лиц, имеющих доступ к персональным данным;',
              'хранение данных в зашифрованном виде;',
              'регулярное обновление программного обеспечения и систем безопасности;',
              'контроль доступа к системам обработки данных.',
            ],
          },
          {
            type: 'p',
            parts: [
              { text: '10.2. Оператор ' },
              { text: 'не хранит', bold: true },
              {
                text: ' данные банковских карт. Обработка платёжных данных осуществляется непосредственно платёжным сервисом ООО «РОБОКАССА», сертифицированным по стандарту PCI DSS.',
              },
            ],
          },
          {
            type: 'p',
            text: '10.3. Субъект понимает и соглашается, что передача информации через сеть Интернет всегда сопряжена с определёнными рисками. Оператор принимает разумные меры для защиты данных, однако не может гарантировать абсолютную безопасность информации при её передаче через интернет.',
          },
          {
            type: 'p',
            text: '10.4. Оператор не несёт ответственности за утрату, кражу или несанкционированное раскрытие данных, если это произошло по вине третьих лиц или самого Субъекта.',
          },
        ],
      },
      {
        title: '11. Права Субъекта персональных данных',
        items: [
          {
            type: 'p',
            text: '11.1. Субъект имеет право (ст. 14, 15, 16, 21 152-ФЗ):',
          },
          {
            type: 'list',
            items: [
              [
                { text: 'получить информацию', bold: true },
                {
                  text: ' об обработке своих персональных данных (перечень данных, цели, сроки, третьи лица);',
                },
              ],
              [
                { text: 'потребовать уточнения', bold: true },
                {
                  text: ' персональных данных, их блокирования или уничтожения, если они являются неполными, устаревшими, неточными, незаконно полученными — Оператор обязан внести изменения в срок ',
                },
                { text: 'не более 7 рабочих дней', bold: true },
                { text: ' (ст. 21 152-ФЗ);' },
              ],
              [
                { text: 'отозвать согласие', bold: true },
                { text: ' на обработку персональных данных;' },
              ],
              [
                { text: 'потребовать прекращения обработки', bold: true },
                {
                  text: ' персональных данных в целях продвижения товаров/услуг;',
                },
              ],
              [
                { text: 'потребовать удаления', bold: true },
                { text: ' персональных данных;' },
              ],
              [
                { text: 'обжаловать', bold: true },
                {
                  text: ' действия Оператора в уполномоченном органе — Федеральной службе по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) или в суде.',
                },
              ],
            ],
          },
          {
            type: 'p',
            text: '11.2. Для реализации своих прав Субъект направляет запрос на электронную почту: support@zeonbot.com. В запросе необходимо указать: ФИО (или Telegram ID), суть запроса, контактные данные для ответа.',
          },
          {
            type: 'p',
            parts: [
              { text: '11.3. Оператор рассматривает запрос в срок ' },
              { text: 'не более 10 (десяти) рабочих дней', bold: true },
              {
                text: ' с момента получения. В случае необходимости дополнительной проверки срок может быть продлён, о чём Субъект уведомляется.',
              },
            ],
          },
          {
            type: 'p',
            text: '11.4. Отзыв согласия на обработку персональных данных может повлечь невозможность дальнейшего оказания услуг (предоставления доступа к Сервису), о чём Субъект уведомляется до прекращения обработки.',
          },
        ],
      },
      {
        title: '12. Файлы cookie',
        items: [
          {
            type: 'p',
            text: '12.1. Сервис использует файлы cookie для:',
          },
          {
            type: 'list',
            items: [
              'обеспечения корректной работы веб-интерфейса (аутентификация, сессии);',
              'сбора статистики использования Сервиса.',
            ],
          },
          {
            type: 'p',
            text: '12.2. Функциональные cookie (необходимые для работы Сервиса) устанавливаются автоматически. Аналитические cookie устанавливаются с согласия Субъекта.',
          },
          {
            type: 'p',
            text: '12.3. Субъект может отключить использование cookie в настройках браузера. Отключение функциональных cookie может привести к невозможности использования веб-интерфейса Сервиса.',
          },
        ],
      },
      {
        title: '13. Согласие на обработку персональных данных',
        items: [
          {
            type: 'p',
            text: '13.1. Согласие на обработку персональных данных предоставляется Субъектом путём совершения конклюдентных действий: использования Сервиса, оплаты Подписки, ввода команды /start в Telegram-боте (ч. 1 ст. 9 152-ФЗ).',
          },
          {
            type: 'p',
            text: '13.2. Для обработки данных в целях исполнения договора (п. 5 ч. 1 ст. 6 152-ФЗ) и исполнения требований закона (п. 2 ч. 1 ст. 6 152-ФЗ) отдельное согласие Субъекта не требуется.',
          },
          {
            type: 'p',
            text: '13.3. Субъект вправе отозвать согласие на обработку персональных данных, направив заявление на электронную почту: support@zeonbot.com. Порядок отзыва и его последствия определены в п. 11.4 настоящей Политики.',
          },
        ],
      },
      {
        title: '14. Изменение Политики',
        items: [
          {
            type: 'p',
            text: '14.1. Оператор вправе вносить изменения в настоящую Политику. Актуальная редакция размещается на сайте https://zeonbot.com.',
          },
          {
            type: 'p',
            text: '14.2. Продолжение использования Сервиса после публикации изменений означает согласие Субъекта с новой редакцией Политики.',
          },
          {
            type: 'p',
            text: '14.3. Оператор рекомендует Субъектам периодически проверять актуальную редакцию Политики.',
          },
        ],
      },
      {
        title: '15. Ответственное лицо и контакты',
        items: [
          {
            type: 'p',
            parts: [{ text: 'Оператор персональных данных:', bold: true }],
          },
          {
            type: 'contacts',
            items: [
              { label: 'Самозанятый', value: 'Ким Екатерина Александровна' },
              { label: 'ИНН', value: '100128640335' },
              { label: 'Город', value: 'Санкт-Петербург' },
              { label: 'Email', value: 'support@zeonbot.com' },
              {
                label: 'Telegram',
                value: '@zeon_game_bot',
                link: 'https://t.me/zeon_game_bot',
              },
              { label: 'Сайт', value: 'https://zeonbot.com' },
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Personal Data Processing Policy',
    date: 'Edition dated 26.03.2026',
    sections: [
      {
        title: '1. General Provisions',
        items: [
          {
            type: 'p',
            text: '1.1. This Personal Data Processing Policy (hereinafter — the "Policy") defines the procedure for processing and protecting personal data of users of the "ZeonBot" service (hereinafter — the "Service").',
          },
          {
            type: 'p',
            parts: [
              { text: '1.2. ' },
              { text: 'Personal data controller:', bold: true },
              {
                text: ' self-employed Kim Ekaterina Alexandrovna, TIN 100128640335, St. Petersburg (hereinafter — the "Controller").',
              },
            ],
          },
          {
            type: 'p',
            text: '1.3. The Policy was developed in accordance with:',
          },
          {
            type: 'list',
            items: [
              'Federal Law No. 152-FZ of 27.07.2006 "On Personal Data" (hereinafter — "152-FZ");',
              'Resolution of the Government of the Russian Federation No. 1119 of 01.11.2012 "On Approval of Requirements for the Protection of Personal Data When Processed in Personal Data Information Systems";',
              'other regulatory acts of the Russian Federation in the field of personal data protection.',
            ],
          },
          {
            type: 'p',
            text: '1.4. This Policy is an integral part of the Service Agreement (offer) posted on the website https://zeonbot.com.',
          },
          {
            type: 'p',
            text: '1.5. By using the Service and/or providing their personal data, the user (hereinafter — the "Data Subject") agrees to the terms of this Policy. If the Data Subject does not agree with the terms of the Policy, they must stop using the Service.',
          },
        ],
      },
      {
        title: '2. Categories of Personal Data Subjects',
        items: [
          {
            type: 'p',
            text: '2.1. The Controller processes personal data of the following categories of subjects:',
          },
          {
            type: 'list',
            items: [
              'users (customers) of the Service — individuals using the functional capabilities of the Service under a subscription.',
            ],
          },
        ],
      },
      {
        title: '3. Personal Data That Is Processed',
        items: [
          {
            type: 'p',
            text: '3.1. The Controller processes the following categories of personal data:',
          },
          {
            type: 'h3',
            text: 'Data provided by the Data Subject:',
          },
          {
            type: 'list',
            items: [
              'email address;',
              'Telegram identifier (Telegram ID);',
              'Telegram username (if available).',
            ],
          },
          {
            type: 'h3',
            text: 'Data collected automatically when using the Service:',
          },
          {
            type: 'list',
            items: [
              'IP address;',
              'cookie data;',
              'browser type and version, operating system;',
              'date and time of access to the Service;',
              'user actions within the Service (usage logs).',
            ],
          },
          {
            type: 'h3',
            text: 'Data received from third parties:',
          },
          {
            type: 'list',
            items: [
              'payment data from the payment service LLC "ROBOKASSA" (fact of payment, amount, date, payment method, transaction identifier).',
            ],
          },
          {
            type: 'h3',
            text: 'Data that the Controller does NOT collect or store:',
          },
          {
            type: 'list',
            items: [
              'bank card data (processed directly by LLC "ROBOKASSA");',
              'passport data;',
              'Data Subject\'s credentials for third-party services (gaming accounts, etc.) — data that the Data Subject provides in the process of using the Service for automation purposes is not permanently stored by the Controller.',
            ],
          },
        ],
      },
      {
        title: '4. Purposes and Legal Bases for Processing',
        items: [
          {
            type: 'p',
            text: '4.1. The Controller processes personal data for the following purposes:',
          },
          {
            type: 'table',
            headers: ['Processing Purpose', 'Legal Basis', 'Data Involved'],
            rows: [
              [
                'Performance of the service agreement (providing access to the Service)',
                'Clause 5, Part 1, Art. 6 of 152-FZ (contract performance)',
                'Email, Telegram ID',
              ],
              [
                'Identification of the Data Subject when using the Service',
                'Clause 5, Part 1, Art. 6 of 152-FZ (contract performance)',
                'Telegram ID, username',
              ],
              [
                'Payment processing and accounting',
                'Clause 5, Part 1, Art. 6 of 152-FZ (contract performance)',
                'Email, payment data',
              ],
              [
                'Communication with the Data Subject (technical support, notifications)',
                'Clause 5, Part 1, Art. 6 of 152-FZ (contract performance)',
                'Email, Telegram ID',
              ],
              [
                'Generating receipts and submitting data to the Federal Tax Service via "My Tax"',
                'Clause 2, Part 1, Art. 6 of 152-FZ (legal obligation — Tax Code, 422-FZ)',
                'Email, amount, service description',
              ],
              [
                'Ensuring security and preventing abuse',
                'Clause 5, Part 1, Art. 6 of 152-FZ (contract performance)',
                'IP address, usage logs',
              ],
              [
                'Improving the Service and analyzing usage',
                'Data Subject\'s consent (Clause 1, Part 1, Art. 6 of 152-FZ, Art. 9 of 152-FZ)',
                'Cookies, browser data, logs',
              ],
            ],
          },
        ],
      },
      {
        title: '5. Methods of Personal Data Processing',
        items: [
          {
            type: 'p',
            text: '5.1. Processing is carried out using automated tools.',
          },
          {
            type: 'p',
            text: '5.2. Processing includes: collection, recording, systematization, accumulation, storage, clarification (updating, modification), retrieval, use, transfer (provision, access), depersonalization, blocking, deletion, and destruction.',
          },
          {
            type: 'p',
            text: '5.3. The Controller does not process special categories of personal data (Art. 10 of 152-FZ) or biometric personal data (Art. 11 of 152-FZ).',
          },
        ],
      },
      {
        title: '6. Transfer of Personal Data to Third Parties',
        items: [
          {
            type: 'p',
            text: '6.1. The Controller transfers personal data to the following third parties:',
          },
          {
            type: 'table',
            headers: [
              'Recipient',
              'Purpose of Transfer',
              'Data Involved',
              'Legal Basis',
            ],
            rows: [
              [
                'LLC "ROBOKASSA" (payment service)',
                'Payment processing',
                'Email, order identifier, amount',
                'Contract performance',
              ],
              [
                'Federal Tax Service of Russia (via "My Tax")',
                'Receipt generation, tax accounting',
                'Email, amount, service description',
                'Legal obligation (Tax Code, 422-FZ)',
              ],
              [
                'Hosting provider',
                'Storage and processing of Service data',
                'All data (in encrypted form)',
                'Contract performance (processing assignment, Part 3, Art. 6 of 152-FZ)',
              ],
            ],
          },
          {
            type: 'p',
            parts: [
              { text: '6.2. The Controller does ' },
              { text: 'not sell', bold: true },
              { text: ' or ' },
              { text: 'transfer', bold: true },
              {
                text: ' personal data to third parties for marketing or advertising purposes.',
              },
            ],
          },
          {
            type: 'p',
            text: '6.3. The Controller may transfer personal data upon request of authorized state bodies of the Russian Federation in cases provided for by law (Clause 2, Part 1, Art. 6 of 152-FZ).',
          },
        ],
      },
      {
        title: '7. Cross-Border Transfer of Personal Data',
        items: [
          {
            type: 'p',
            text: '7.1. The servers hosting the Service may be located outside the Russian Federation.',
          },
          {
            type: 'p',
            text: '7.2. Cross-border transfer of personal data is carried out in accordance with the requirements of Art. 12 of 152-FZ and only to countries that are parties to the Council of Europe Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data (Convention No. 108), as well as to other countries ensuring adequate protection of the rights of personal data subjects.',
          },
          {
            type: 'p',
            text: '7.3. The primary recording, systematization, and storage of personal data of Russian Federation citizens is carried out using databases located within the territory of the Russian Federation (Part 5, Art. 18 of 152-FZ).',
          },
        ],
      },
      {
        title: '8. Personal Data Retention Periods',
        items: [
          {
            type: 'p',
            text: '8.1. Personal data is stored for the entire period of the Data Subject\'s use of the Service.',
          },
          {
            type: 'p',
            parts: [
              {
                text: '8.2. After the Data Subject ceases to use the Service, personal data is stored for ',
              },
              { text: '1 (one) year', bold: true },
              { text: ', after which it is destroyed.' },
            ],
          },
          {
            type: 'p',
            parts: [
              { text: '8.3. Payment data is stored for ' },
              { text: '5 (five) years', bold: true },
              {
                text: ' in accordance with the requirements of the tax legislation of the Russian Federation.',
              },
            ],
          },
          {
            type: 'p',
            parts: [
              {
                text: '8.4. Upon withdrawal of consent to personal data processing, the Controller ceases processing and destroys the data within no more than ',
              },
              { text: '30 (thirty) calendar days', bold: true },
              {
                text: ', except for data whose processing is required to fulfill legal obligations (clause 8.3).',
              },
            ],
          },
        ],
      },
      {
        title: '9. Procedure for Destruction of Personal Data',
        items: [
          {
            type: 'p',
            text: '9.1. Destruction of personal data is carried out by permanently deleting records from the Service databases.',
          },
          {
            type: 'p',
            text: '9.2. Upon destruction of personal data, the Controller draws up a destruction act (upon the Data Subject\'s request).',
          },
          {
            type: 'p',
            text: '9.3. Destruction is carried out in the following cases:',
          },
          {
            type: 'list',
            items: [
              'upon expiry of retention periods (section 8);',
              'upon the Data Subject\'s application to withdraw consent;',
              'upon achievement of the processing purpose;',
              'when unlawful processing is identified — within no more than 10 business days.',
            ],
          },
        ],
      },
      {
        title: '10. Protection of Personal Data',
        items: [
          {
            type: 'p',
            text: '10.1. The Controller takes organizational and technical measures to protect personal data in accordance with Art. 19 of 152-FZ, including:',
          },
          {
            type: 'list',
            items: [
              'use of secure data transmission protocols (HTTPS/TLS);',
              'restriction of access to personal data to a limited number of persons;',
              'storage of data in encrypted form;',
              'regular updates of software and security systems;',
              'access control to data processing systems.',
            ],
          },
          {
            type: 'p',
            parts: [
              { text: '10.2. The Controller does ' },
              { text: 'not store', bold: true },
              {
                text: ' bank card data. Payment data processing is carried out directly by the payment service LLC "ROBOKASSA", certified under the PCI DSS standard.',
              },
            ],
          },
          {
            type: 'p',
            text: '10.3. The Data Subject understands and agrees that transmission of information over the Internet always involves certain risks. The Controller takes reasonable measures to protect data, but cannot guarantee absolute security of information when transmitted over the internet.',
          },
          {
            type: 'p',
            text: '10.4. The Controller is not liable for the loss, theft, or unauthorized disclosure of data if this occurred through the fault of third parties or the Data Subject themselves.',
          },
        ],
      },
      {
        title: '11. Rights of the Personal Data Subject',
        items: [
          {
            type: 'p',
            text: '11.1. The Data Subject has the right (Art. 14, 15, 16, 21 of 152-FZ):',
          },
          {
            type: 'list',
            items: [
              [
                { text: 'to obtain information', bold: true },
                {
                  text: ' about the processing of their personal data (list of data, purposes, retention periods, third parties);',
                },
              ],
              [
                { text: 'to request clarification', bold: true },
                {
                  text: ' of personal data, its blocking or destruction if it is incomplete, outdated, inaccurate, or unlawfully obtained — the Controller must make changes within ',
                },
                { text: 'no more than 7 business days', bold: true },
                { text: ' (Art. 21 of 152-FZ);' },
              ],
              [
                { text: 'to withdraw consent', bold: true },
                { text: ' to the processing of personal data;' },
              ],
              [
                { text: 'to demand cessation of processing', bold: true },
                {
                  text: ' of personal data for the purposes of promoting goods/services;',
                },
              ],
              [
                { text: 'to demand deletion', bold: true },
                { text: ' of personal data;' },
              ],
              [
                { text: 'to appeal', bold: true },
                {
                  text: ' the Controller\'s actions to the authorized body — the Federal Service for Supervision of Communications, Information Technology and Mass Media (Roskomnadzor) or in court.',
                },
              ],
            ],
          },
          {
            type: 'p',
            text: '11.2. To exercise their rights, the Data Subject sends a request to the email address: support@zeonbot.com. The request must include: full name (or Telegram ID), the substance of the request, and contact details for a response.',
          },
          {
            type: 'p',
            parts: [
              { text: '11.3. The Controller reviews the request within ' },
              { text: 'no more than 10 (ten) business days', bold: true },
              {
                text: ' from the date of receipt. If additional verification is required, the deadline may be extended, of which the Data Subject will be notified.',
              },
            ],
          },
          {
            type: 'p',
            text: '11.4. Withdrawal of consent to personal data processing may result in the inability to further provide services (access to the Service), of which the Data Subject will be notified prior to the cessation of processing.',
          },
        ],
      },
      {
        title: '12. Cookies',
        items: [
          {
            type: 'p',
            text: '12.1. The Service uses cookies for:',
          },
          {
            type: 'list',
            items: [
              'ensuring correct operation of the web interface (authentication, sessions);',
              'collecting Service usage statistics.',
            ],
          },
          {
            type: 'p',
            text: '12.2. Functional cookies (required for the Service to operate) are set automatically. Analytical cookies are set with the Data Subject\'s consent.',
          },
          {
            type: 'p',
            text: '12.3. The Data Subject may disable the use of cookies in their browser settings. Disabling functional cookies may result in the inability to use the Service\'s web interface.',
          },
        ],
      },
      {
        title: '13. Consent to Personal Data Processing',
        items: [
          {
            type: 'p',
            text: '13.1. Consent to personal data processing is given by the Data Subject through conclusive actions: using the Service, paying for a Subscription, entering the /start command in the Telegram bot (Part 1, Art. 9 of 152-FZ).',
          },
          {
            type: 'p',
            text: '13.2. For processing data for the purposes of contract performance (Clause 5, Part 1, Art. 6 of 152-FZ) and compliance with legal requirements (Clause 2, Part 1, Art. 6 of 152-FZ), separate consent of the Data Subject is not required.',
          },
          {
            type: 'p',
            text: '13.3. The Data Subject may withdraw consent to personal data processing by submitting an application to the email address: support@zeonbot.com. The withdrawal procedure and its consequences are defined in clause 11.4 of this Policy.',
          },
        ],
      },
      {
        title: '14. Policy Amendments',
        items: [
          {
            type: 'p',
            text: '14.1. The Controller may amend this Policy. The current version is published on the website https://zeonbot.com.',
          },
          {
            type: 'p',
            text: '14.2. Continued use of the Service after publication of changes constitutes the Data Subject\'s agreement to the new version of the Policy.',
          },
          {
            type: 'p',
            text: '14.3. The Controller recommends that Data Subjects periodically check the current version of the Policy.',
          },
        ],
      },
      {
        title: '15. Responsible Person and Contacts',
        items: [
          {
            type: 'p',
            parts: [{ text: 'Personal data controller:', bold: true }],
          },
          {
            type: 'contacts',
            items: [
              { label: 'Self-employed', value: 'Kim Ekaterina Alexandrovna' },
              { label: 'TIN', value: '100128640335' },
              { label: 'City', value: 'St. Petersburg' },
              { label: 'Email', value: 'support@zeonbot.com' },
              {
                label: 'Telegram',
                value: '@zeon_game_bot',
                link: 'https://t.me/zeon_game_bot',
              },
              { label: 'Website', value: 'https://zeonbot.com' },
            ],
          },
        ],
      },
    ],
  },
};
