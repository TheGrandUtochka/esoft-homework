import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import MyCompetitions from "../MyCompetitions/MyCompetitions.jsx";
import MyFutureCompetitions from "../MyFutureCompetitions/MyFutureCompetitions.jsx";
import LessFiftyCompetitions from "../LessFiftyCompetitions/LessFiftyCompetitions.jsx";
import MoreFiftyCompetitions from "../MoreFiftyCompetitions/MoreFiftyCompetitions.jsx";
import Row from "react-bootstrap/Row";
import {CompetitionsProvider} from "../CompetitionsContext/CompetitionsContext.jsx";

function ShowCompetitionFilterBtn() {
    const [value, setValue] = useState(1);
    const handleChange = (val) => setValue(val);

    return (
        <>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange}>
                <ToggleButton id="tbg-radio-1" value={1}>
                    Все
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                    Показать компетенции с уровнем изучения >50%
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3}>
                    Показать компетенции с уровнем изучения &lt;50%
                </ToggleButton>
            </ToggleButtonGroup>

            {value === 1 && (
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
            )}
            {value === 2 && (
                <CompetitionsProvider>
                    <Row>
                        <MoreFiftyCompetitions />
                    </Row>
                </CompetitionsProvider>
            )}
            {value === 3 && (
                <CompetitionsProvider>
                    <Row>
                        <LessFiftyCompetitions />
                    </Row>
                </CompetitionsProvider>
            )}
        </>
    );
}

export default ShowCompetitionFilterBtn;