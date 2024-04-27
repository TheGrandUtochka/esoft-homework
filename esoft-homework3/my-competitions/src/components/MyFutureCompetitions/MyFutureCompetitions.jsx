import React, { useContext } from 'react';
import { CompetitionsContext } from "../CompetitionsContext/CompetitionsContext.jsx";
import CompetitionCard from "../CompetitionCard/CompetitionCard.jsx";

const MyFutureCompetitions = () => {
    const { myFutureCompetitions } = useContext(CompetitionsContext);

    if (!myFutureCompetitions) {
        return <div> Будущие компетенции не найдены. </div>;
    }

    return (
        myFutureCompetitions.map((competition, index) => (
            <CompetitionCard
                key={index}
                title={competition.title}
                image={competition.image}
                description={competition.description}
                completed={competition.completed}
            /> ))
    );
};

export default MyFutureCompetitions;