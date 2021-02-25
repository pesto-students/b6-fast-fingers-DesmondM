import React from 'react'
import { convertToMinutesAndSeconds } from '../../utils/time';
import './index.css'
function EndScoreCard({ score, isHighScore }) {

    return (<div className="EndScoreCard">
        <div>
            Your score is...
        </div>
        <div>
            {convertToMinutesAndSeconds(score)}
        </div>
        <div>
        { isHighScore ? "New High Score" : ""}
        </div>
    </div>);
}
export default EndScoreCard