import React, { createContext, useState } from 'react';

export const CompetitionsContext = createContext(null);

export const CompetitionsProvider = ({ children }) => {
    const [competitions, setCompetitions] = useState([
        { title: 'Java', image: 'https://i.stack.imgur.com/QSUlO.jpg?s=64&g=1', completed: true },
        { title: 'HTML', image: 'https://avatars.cloudflare.steamstatic.com/a272ba907dd923818e76b6091de544af7a356fb6_medium.jpg', completed: true },
        { title: 'CSS', image: 'https://nxtwave.imgix.net/ccbp-website/Blogs/java-full-stack/css.svg?auto=format,compress&q=80', completed: true },
        { title: 'JavaScript', image: 'https://avatars.cloudflare.steamstatic.com/38cb7b7806e9d8296144839e2bad9f58d5cf720b_medium.jpg', completed: true },
        { title: 'React', image: 'https://avatars.steamstatic.com/a7ce1fbad9ba64a4aed188a6f2cab8c6405a2756_medium.jpg', completed: false },
        { title: 'Тестирование', image: 'https://icon666.com/r/_thumb/zrp/zrp7u5zqywts_64.png', completed: false },
        { title: 'TypeScript', image: 'https://decipher.dev/30-seconds-of-typescript/img/favicon.ico', completed: false },
        { title: 'Restful API', image: 'https://i.stack.imgur.com/JstTY.png?s=64&g=1', completed: false },
        { title: 'Микросервисы', image: 'https://avatars.githubusercontent.com/u/72651437?s=64&v=4', completed: false },
        { title: 'Docker', image: 'https://avatars.githubusercontent.com/u/69834377?s=64&v=4', completed: false },
        { title: 'PostgreSQL', image: 'https://s3.amazonaws.com/cloud.ohloh.net/attachments/6297/logo_pgfr_sans_100_med.png', completed: false },
        { title: 'UX/UI', image: 'https://assets.graffletopia.com/production/users/33247/1382140872/small.png', completed: false },
        { title: 'Мультизадачность', image: 'https://icon666.com/r/_thumb/v8n/v8nao9c2wn0j_64.png', completed: false },
        { title: 'Планирование', image: 'https://cdn1.iconfinder.com/data/icons/usability-testing-line/128/Usability_Testing_-_Line_-_Expand-18-64.png', completed: false },
    ]);

    const myCompetitions = competitions.filter(comp => comp.completed);
    const myFutureCompetitions = competitions.filter(comp => !comp.completed);


    return (
        <CompetitionsContext.Provider value={{ myCompetitions, myFutureCompetitions }}>
            {children}
        </CompetitionsContext.Provider>
    );
};
