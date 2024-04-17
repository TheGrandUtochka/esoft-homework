import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Row from "react-bootstrap/Row";
import MyCompetitions from "../MyCompetitions/MyCompetitions.jsx";
import MyFutureCompetitions from "../MyFutureCompetitions/MyFutureCompetitions.jsx";
import {CompetitionsProvider} from "../CompetitionsContext/CompetitionsContext.jsx";

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
                    <CompetitionsProvider>
                        <Row>
                            <h2>Мои компетенции:</h2>
                            <MyCompetitions/>
                            <h2>
                                Компетенции, которые я бы хотел изучить:
                            </h2>
                            <MyFutureCompetitions/>
                        </Row>
                    </CompetitionsProvider>
                </div>

            </Collapse>
        </>
    );
}

export default CompetitionBtn;