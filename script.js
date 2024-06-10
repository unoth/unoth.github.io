document.getElementById('language-switcher').addEventListener('click', function() {
    var lang = document.documentElement.lang;
    if (lang === 'ru') {
        document.documentElement.lang = 'en';
        this.textContent = 'RU';
        translateToEnglish();
    } else {
        document.documentElement.lang = 'ru';
        this.textContent = 'EN';
        translateToRussian();
    }
});

function translateToEnglish() {
    document.querySelector('h1').textContent = 'Android developer';
    document.querySelector('h2').textContent = 'Kristina Dedova';
    document.querySelector('#about h3').textContent = 'ABOUT ME';
    document.querySelector('#about p:nth-of-type(1)').textContent = 'An enterprising junior developer with experience as a service manager at a company specializing in the repair of laboratory equipment for the oil industry. In her past life (read: career), she successfully coordinated the maintenance and repair of equipment for industry giants such as Gazprom, Rosneft, and Sibur. A professional in preparing commercial proposals, contracts, and organizing business trips.';
    document.querySelector('#about p:nth-of-type(2)').textContent = 'One day, she decided it was time to conquer new heights and plunged headfirst into the world of Android development. She quickly acquired the necessary skills and is now ready to create something truly awesome. Her plans for the future? To continue growing in the IT field and level up her hard skills to superhero status. She is transitioning to IT to leverage her project management skills and client interaction experience to create mobile applications that deliver a "wow" effect.';

    document.querySelector('#skills h3').textContent = 'SKILLS';
    document.querySelector('#projects h3').textContent = 'PROJECTS';
    document.querySelector('#projects ul li:nth-of-type(1)').innerHTML = '<a href="https://github.com/unoth/Movies-MVVM"><strong>Movies App</strong></a> - An app for viewing information about movies using the Kinopoisk API. It features detailed information about movies, including descriptions, ratings, cast, reviews, and trailers. The app allows users to save their favorite movies in a local database for quick access and offline viewing. The main technology stack includes MVVM, Room, and Retrofit.';
    document.querySelector('#projects ul li:nth-of-type(2)').innerHTML = '<a href="https://github.com/unoth/CryptoLookApp"><strong>CryptoLook App</strong></a> - A real-time cryptocurrency tracking app using the CryptoCompare API. It includes the ability to store data locally, allowing access to the latest currency rates even without an internet connection. The main technology stack includes MVVM, Room, and Retrofit.';
    document.querySelector('#projects ul li:nth-of-type(3)').innerHTML = '<a href="https://github.com/unoth/Messenger-MVVM"><strong>Messenger App</strong></a> - A real-time messaging app using Firebase for storing user data and chat history. The main technology stack includes MVVM and Firebase.';

    document.querySelector('#education h3').textContent = 'EDUCATION';
    document.querySelector('#education p:nth-of-type(1)').innerHTML = '<strong>Higher Education:</strong> MIREA - Russian Technological University, Moscow, 2015-2021';
    document.querySelector('#education p:nth-of-type(2)').innerHTML = '<strong>Advanced Training:</strong> Android Developer Profession (Stepik)';
}

function translateToRussian() {
    document.querySelector('h1').textContent = 'Android developer';
    document.querySelector('h2').textContent = 'Дедова Кристина';
    document.querySelector('#about h3').textContent = 'О СЕБЕ';
    document.querySelector('#about p:nth-of-type(1)').textContent = 'Инициативная начинающая разработчица с опытом работы сервисным менеджером в компании по ремонту лабораторного оборудования нефтяной отрасли. В своей прошлой жизни (читай: карьере) успешно координировала техническое обслуживание и ремонт оборудования для таких гигантов, как Газпром, Роснефть и Сибур. Профессионал в составлении коммерческих предложений, договоров и организации командировок.';
    document.querySelector('#about p:nth-of-type(2)').textContent = 'Однажды решила, что пора покорять новые вершины, и с головой окунулась в мир Android разработки. Быстро овладела необходимыми навыками и теперь готова создать что-то действительно крутое. Планы на будущее? Продолжать расти в сфере IT и прокачивать свои hard skills до уровня супергероя. Перехожу в IT, чтобы применить свои навыки управления проектами и опыт взаимодействия с клиентами для создания мобильных приложений, которые будут вызывать «вау-эффект»';

    document.querySelector('#skills h3').textContent = 'УМЕНИЯ';
    document.querySelector('#projects h3').textContent = 'ПРОЕКТЫ';
    document.querySelector('#projects ul li:nth-of-type(1)').innerHTML = '<a href="https://github.com/unoth/Movies-MVVM"><strong>Movies App</strong></a> - Приложение для просмотра информации о фильмах с использованием API кинопоиска. Реализовано отображение подробной информации о фильмах, включая описание, рейтинг, актерский состав, отзывы и трейлеры. Возможность сохранения избранных фильмов в локальной базе данных для быстрого доступа и оффлайн-просмотра. Основной стек технологий: MVVM, Room, Retrofit.';
    document.querySelector('#projects ul li:nth-of-type(2)').innerHTML = '<a href="https://github.com/unoth/CryptoLookApp"><strong>CryptoLook App</strong></a> - Приложение для отслеживания курса криптовалют в реальном времени с использованием API CryptoCompare. Реализована возможность локального хранения данных, чтобы иметь доступ к информации о последнем курсе валют без наличия интернета. Основной стек технологий: MVVM, Room, Retrofit.';
    document.querySelector('#projects ul li:nth-of-type(3)').innerHTML = '<a href="https://github.com/unoth/Messenger-MVVM"><strong>Messenger App</strong></a> - Приложение для обмена сообщениями в режиме реального времени с использованием Firebase для хранения личных данных пользователей и истории переписки. Основной стек технологий: MVVM, Firebase.';

    document.querySelector('#education h3').textContent = 'ОБРАЗОВАНИЕ';
    document.querySelector('#education p:nth-of-type(1)').innerHTML = '<strong>Высшее образование:</strong> РТУ МИРЭА - Российский технологический университет, Москва, 2015-2021';
    document.querySelector('#education p:nth-of-type(2)').innerHTML = '<strong>Повышение квалификации:</strong> Профессия Android Developer (Stepik)';
}
