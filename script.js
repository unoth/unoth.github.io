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
    document.querySelector('#about p:nth-of-type(1)').textContent = "Hi there! I'm a beginner Android developer with a technical background. Previously, I worked in diagnostics and technical maintenance of laboratory equipment for giants like Sibur, Rosneft, and Gazprom. Contracts, technical specifications, negotiations — it's all my business!";
    document.querySelector('#about p:nth-of-type(2)').textContent = "Now I've decided to switch from oil industry to IT because I've always been fascinated by digital technologies and science fiction. After training in Android development, I'm ready to dive into the world of programming.";
    document.querySelector('#about p:nth-of-type(2)').textContent = "My superpowers include quick learning, decision-making, and effective communication without unnecessary epic dramas. I'm confident that I can contribute to any project and fit in perfectly with a young and dynamic team.";
    
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
    document.querySelector('#about p:nth-of-type(1)').textContent = "Привет! Я начинающая Android-разработчица с техническим образованием. Раньше я занималась диагностикой и техническим обслуживанием лабораторного оборудования для таких гигантов, как Сибур, Роснефть и Газпром. Договора, технические задания, переговоры — it's all my business!";
    document.querySelector('#about p:nth-of-type(2)').textContent = "Теперь я решила поменять нефтянку на IT, потому что мне всегда были интересны цифровые технологии и научная фантастика. После обучения Android-разработке готова погрузиться в мир программирования.";
    document.querySelector('#about p:nth-of-type(3)').textContent = "Мои суперсилы: быстрая обучаемость, принятие решений и коммуникабельность без лишних эпических драм. Уверена, что смогу внести свой вклад в любой проект и отлично впишусь в молодой и динамичный коллектив.";
    
    document.querySelector('#skills h3').textContent = 'УМЕНИЯ';
    document.querySelector('#projects h3').textContent = 'ПРОЕКТЫ';
    document.querySelector('#projects ul li:nth-of-type(1)').innerHTML = '<a href="https://github.com/unoth/Movies-MVVM"><strong>Movies App</strong></a> - Приложение для просмотра информации о фильмах с использованием API кинопоиска. Реализовано отображение подробной информации о фильмах, включая описание, рейтинг, актерский состав, отзывы и трейлеры. Возможность сохранения избранных фильмов в локальной базе данных для быстрого доступа и оффлайн-просмотра. Основной стек технологий: MVVM, Room, Retrofit.';
    document.querySelector('#projects ul li:nth-of-type(2)').innerHTML = '<a href="https://github.com/unoth/CryptoLookApp"><strong>CryptoLook App</strong></a> - Приложение для отслеживания курса криптовалют в реальном времени с использованием API CryptoCompare. Реализована возможность локального хранения данных, чтобы иметь доступ к информации о последнем курсе валют без наличия интернета. Основной стек технологий: MVVM, Room, Retrofit.';
    document.querySelector('#projects ul li:nth-of-type(3)').innerHTML = '<a href="https://github.com/unoth/Messenger-MVVM"><strong>Messenger App</strong></a> - Приложение для обмена сообщениями в режиме реального времени с использованием Firebase для хранения личных данных пользователей и истории переписки. Основной стек технологий: MVVM, Firebase.';

    document.querySelector('#education h3').textContent = 'ОБРАЗОВАНИЕ';
    document.querySelector('#education p:nth-of-type(1)').innerHTML = '<strong>Высшее образование:</strong> РТУ МИРЭА - Российский технологический университет, Москва, 2015-2021';
    document.querySelector('#education p:nth-of-type(2)').innerHTML = '<strong>Повышение квалификации:</strong> Профессия Android Developer (Stepik)';
}
