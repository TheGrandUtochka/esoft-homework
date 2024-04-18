import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Row from "react-bootstrap/Row";
import MyCompetitions from "../MyCompetitions/MyCompetitions.jsx";
import MyFutureCompetitions from "../MyFutureCompetitions/MyFutureCompetitions.jsx";
import {CompetitionsProvider} from "../CompetitionsContext/CompetitionsContext.jsx";
import ShowCompetitionFilterBtn from "../ShowCompetitionFilterBtn/ShowCompetitionFilterBtn.jsx";
import LessFiftyCompetitions from "../LessFiftyCompetitions/LessFiftyCompetitions.jsx";
import MoreFiftyCompetitions from "../MoreFiftyCompetitions/MoreFiftyCompetitions.jsx";

function CompetitionBtn() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="wrap-competitions"
                aria-expanded={open}>

                {open ? 'Убрать компетенции ▲' : 'Показать компетенции ▼'}

            </Button>
            <Collapse in={open}>
                <div id='wrap-competitions'>
                    <ShowCompetitionFilterBtn/>
                </div>
            </Collapse>
        </>
    );
}

export default CompetitionBtn;