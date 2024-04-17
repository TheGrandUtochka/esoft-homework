import React, { useContext } from 'react';
import { CompetitionsContext } from "../CompetitionsContext/CompetitionsContext.jsx";
import CompetitionCard from "../CompetitionCard/CompetitionCard.jsx";

const MyCompetitions = () => {
    const { myCompetitions } = useContext(CompetitionsContext);

    if (!myCompetitions || myCompetitions.length === 0) {
        return <div>Компетенции не найдены.</div>;
    }

    return (
        myCompetitions.map((competition, index) => (
            <CompetitionCard
                    key={index}
                    title={competition.title}
                    image={competition.image}
            /> ))
    );
};

export default MyCompetitions;