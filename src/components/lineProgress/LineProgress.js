import React from 'react';
import * as S from './lineProgress.styles';
import { useSelector } from "react-redux";
import {isFirefox} from 'configs/utils';

const LineProgress = ({percent}) => {
    const secondStatusValue = percent;
    const healthScoreData = useSelector(state => state.auth.healthScoreData);
    const firstStatusValue = healthScoreData.currentHealthScore * 2;
    return (
        <div>
            <S.LinearChart id="Group_1866" data-name="Group 1866" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/2000/svg" width="200" height="12.001" viewBox="0 0 200 12.001">
                <g id="Group_158" data-name="Group 158" transform="translate(0 0)">
                    <rect id="_6" data-name="6" width="12.001" height="200" rx="6.001" transform="translate(0 12) rotate(-90)" fill="#eaefed">
                        <animate attributeName="height" from="0" to="200" dur="1s" fill="freeze" />
                    </rect>
                    <rect id="_2" data-name="2" width="12.001" height={secondStatusValue} rx="6.001" transform="translate(0 12) rotate(-90)" opacity="0.1">
                        {isFirefox && <animate attributeName="height" from="0" to={secondStatusValue} dur="1s" fill="freeze" />}
                    </rect>
                    <rect id="_2-2" data-name="2" width="12.001" height={firstStatusValue} ry="6.001" transform="translate(0 12) rotate(-90)" fill="#44554c">
                        {isFirefox && <animate attributeName="height" from="0" to={firstStatusValue} begin="0s" dur="1s" fill="freeze" />}
                    </rect>
                </g>
            </S.LinearChart>
        </div>
    )
}

export default LineProgress
