import React, { createContext, useState } from 'react';

export const CompetitionsContext = createContext(null);

export const CompetitionsProvider = ({ children }) => {
    const [competitions, setCompetitions] = useState([
        {   title: 'Java',
            image: 'https://i.stack.imgur.com/QSUlO.jpg?s=64&g=1',
            description: 'Объектно-ориентированный язык программирования, широко используемый для создания масштабируемых и надежных приложений.',
            completed: 100 },
        {   title: 'HTML',
            image: 'https://avatars.cloudflare.steamstatic.com/a272ba907dd923818e76b6091de544af7a356fb6_medium.jpg',
            description: 'Стандартный язык разметки, используемый для создания структуры веб-страниц.',
            completed: 100 },
        {   title: 'CSS',
            image: 'https://nxtwave.imgix.net/ccbp-website/Blogs/java-full-stack/css.svg?auto=format,compress&q=80',
            description: 'Язык стилей, который определяет внешний вид и форматирование HTML-документов.',
            completed: 100 },
        {   title: 'JavaScript',
            image: 'https://avatars.cloudflare.steamstatic.com/38cb7b7806e9d8296144839e2bad9f58d5cf720b_medium.jpg',
            description: 'Мощный язык сценариев, который добавляет интерактивность и динамические функции на веб-страницы.',
            completed: 100 },
        {   title: 'React',
            image: 'https://avatars.steamstatic.com/a7ce1fbad9ba64a4aed188a6f2cab8c6405a2756_medium.jpg',
            description: 'Библиотека JavaScript для построения пользовательских интерфейсов, особенно одностраничных приложений.',
            completed: 25 },
        {   title: 'Тестирование',
            image: 'https://icon666.com/r/_thumb/zrp/zrp7u5zqywts_64.png',
            description: 'роцесс проверки и оценки, чтобы убедиться, что программа или система выполняет свои функции правильно.',
            completed: 10 },
        {   title: 'TypeScript',
            image: 'https://decipher.dev/30-seconds-of-typescript/img/favicon.ico',
            description: 'Язык программирования, расширяющий JavaScript, добавляя строгую типизацию и объектно-ориентированные возможности.',
            completed: 0 },
        {   title: 'Restful API',
            image: 'https://i.stack.imgur.com/JstTY.png?s=64&g=1',
            description: 'Набор принципов и стандартов для создания веб-сервисов, обеспечивающих интероперабельность между компьютерными системами в интернете.',
            completed: 5 },
        {   title: 'Микросервисы',
            image: 'https://avatars.githubusercontent.com/u/72651437?s=64&v=4',
            description: 'Архитектурный подход к разработке программного обеспечения, при котором приложение состоит из небольших, независимых сервисов.',
            completed: 0 },
        {   title: 'Docker',
            image: 'https://avatars.githubusercontent.com/u/69834377?s=64&v=4',
            description: 'Платформа для разработки, доставки и запуска приложений в контейнерах, обеспечивающая удобство и портативность.',
            completed: 75 },
        {   title: 'PostgreSQL',
            image: 'https://s3.amazonaws.com/cloud.ohloh.net/attachments/6297/logo_pgfr_sans_100_med.png',
            description: 'Мощная, открытая система управления базами данных с поддержкой сложных запросов и транзакций.',
            completed: 85 },
        {   title: 'UX/UI',
            image: 'https://assets.graffletopia.com/production/users/33247/1382140872/small.png',
            description: 'Дисциплины, связанные с созданием продуктов, предоставляющих значимые и релевантные взаимодействия с пользователем.',
            completed: 5 },
        {   title: 'Мультизадачность',
            image: 'https://icon666.com/r/_thumb/v8n/v8nao9c2wn0j_64.png',
            description: 'Способность эффективно управлять и выполнять несколько задач одновременно.',
            completed: 30 },
        {   title: 'Планирование',
            image: 'https://cdn1.iconfinder.com/data/icons/usability-testing-line/128/Usability_Testing_-_Line_-_Expand-18-64.png',
            description: 'Процесс определения и организации задач или проектов с целью достижения установленных целей.',
            completed: 40 },
    ]);

    const myCompetitions = competitions.filter(comp => comp.completed === 100);
    const myFutureCompetitions = competitions.filter(comp => comp.completed !== 100);

    const moreFiftyCompetitions = competitions.filter(comp => comp.completed >= 50);
    const lessFiftyCompetitions = competitions.filter(comp => comp.completed <= 50);

    return (
        <CompetitionsContext.Provider value={{ myCompetitions, myFutureCompetitions, moreFiftyCompetitions, lessFiftyCompetitions }}>
            {children}
        </CompetitionsContext.Provider>
    );
};
