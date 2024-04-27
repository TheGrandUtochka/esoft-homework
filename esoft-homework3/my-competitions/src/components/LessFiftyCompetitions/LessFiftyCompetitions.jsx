import React, { useContext } from 'react';
import { CompetitionsContext } from "../CompetitionsContext/CompetitionsContext.jsx";
import CompetitionCard from "../CompetitionCard/CompetitionCard.jsx";

const LessFiftyCompetitions = () => {
    const { lessFiftyCompetitions } = useContext(CompetitionsContext);

    if (!lessFiftyCompetitions) {
        return <div> Ничего не найдено. </div>;
    }

    return (
        lessFiftyCompetitions.map((competition, index) => (
            <CompetitionCard
                key={index}
                title={competition.title}
                image={competition.image}
                description={competition.description}
                completed={competition.completed}
            /> ))
    );
};

export default LessFiftyCompetitions;