import React, { useContext } from 'react';
import { CompetitionsContext } from "../CompetitionsContext/CompetitionsContext.jsx";
import CompetitionCard from "../CompetitionCard/CompetitionCard.jsx";

const MoreFiftyCompetitions = () => {
    const { moreFiftyCompetitions } = useContext(CompetitionsContext);

    if (!moreFiftyCompetitions) {
        return <div> Ничего не найдено. </div>;
    }

    return (
        moreFiftyCompetitions.map((competition, index) => (
            <CompetitionCard
                key={index}
                title={competition.title}
                image={competition.image}
                description={competition.description}
                completed={competition.completed}
            /> ))
    );
};

export default MoreFiftyCompetitions;