import React from 'react'
import { convertToMinutesAndSeconds } from '../../utils/time'
import './index.css'

function ScoreCard({gameId, score, isHighScore}){
return (
    <div className="ScoreCard">
        <div className="gameText">
            GAME: {gameId} 
        </div>
        <div className="scoreText">
        <div>{convertToMinutesAndSeconds(score)}</div>
        <div className="highScoreBadge">
            {isHighScore ? "Top score" : ""}
        </div>
        </div>
    </div>
);
}                           
export default ScoreCard