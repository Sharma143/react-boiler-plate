import React, {useState, useEffect} from 'react';
import * as S from './linearSlider.styles';
import {isFirefox} from 'configs/utils';

const LinearSlider = ({currentPosition, setCurrentPosition}) => {
    const budgetValues =  [0, 320, 663];

    const [dragging, setDragging] = useState(false);
    const [animateDrag, setAnimateDrag] = useState(false);
    const [draggingValue, setDraggingValue] = useState(budgetValues[currentPosition]);

    const widthValue = dragging ? draggingValue : budgetValues[currentPosition];
    const knobToValue = widthValue + " 7.756";
    const currentStatus = "translate(" + knobToValue + ')';

    useEffect(() => {
        const knob = document.getElementById('Ellipse_164');
        knob.addEventListener('mousedown', startDrag);
        setTimeout(() => {
            setAnimateDrag(true)
        }, 1000);
        
    }, [])

    useEffect(() => {
        if(!dragging) handleSliderPosition(currentPosition, draggingValue)
    }, [dragging])

    const mousePosition = (e) => {
        setDraggingValue(e.offsetX - 10)
    }
    
    const startDrag = () => {
        const slider = document.getElementById('linearSlider');
        const knob = document.getElementById('Ellipse_164');
        knob.addEventListener('mousemove', drag);
        slider.addEventListener('mousemove', mousePosition);
        setDragging(true)
    }

    const drag = () => {
        const knob = document.getElementById('Ellipse_164');
        knob.addEventListener('mouseup', endDrag);
    }

    const handleSliderPosition = (current, dragValue) => {
        if(budgetValues[current] < dragValue) {
            if(current === 0) {
                if((budgetValues[1] + 20) > dragValue) setCurrentPosition(current+1)
                else if(budgetValues[1] < dragValue) setCurrentPosition(current+2)
            }
            if(current === 1) setCurrentPosition(current+1)
        } else if (budgetValues[current] - 20 > dragValue) {
            if(current === 1) setCurrentPosition(current-1)
            if(current === 2) {
                if((budgetValues[1] - 20) < dragValue) setCurrentPosition(current-1)
                else if(budgetValues[1] > dragValue) setCurrentPosition(current-2)
            }
        }
    }

    const endDrag = () => {
        const slider = document.getElementById('linearSlider');
        const knob = document.getElementById('Ellipse_164');
        knob.removeEventListener('mousemove', drag)
        knob.removeEventListener('mouseup', endDrag)
        slider.removeEventListener('mousemove', mousePosition);
        setDragging(false)
    }

    return (
        <S.LinearSliderContainer id="linearSlider">
            <svg xmlns="http://www.w3.org/2000/svg" width="697.385" height="29.671" viewBox="0 0 697.385 29.671">
                <g id="Group_1900" data-name="Group 1900" transform="translate(-28 -494.418)">
                    <g id="Slider" transform="translate(28 486.662)">
                    <g id="Slider-2" data-name="Slider" transform="translate(0)">
                        <rect id="Rectangle_570" data-name="Rectangle 570" width="697.384" height="7.418" rx="2" transform="translate(0 18.883)" fill="#ededed"/>
                        <rect id="Rectangle_1623" data-name="Rectangle 1623" width="5.563" height="22.254" rx="2" transform="translate(332.592 11.465)" fill="#ededed"/>
                        <rect id="Rectangle_1828" data-name="Rectangle 1828" width="5.563" height="22.254" rx="2" transform="translate(0 11.465)" fill="#ededed"/>
                        <g id="Group_6434" data-name="Group 6434" transform="translate(0 0)">
                            <rect id="Rectangle_571" data-name="Rectangle 571" width={widthValue} height="7.418" rx="2" transform="translate(0 18.883)" fill="#2ecf96">
                                {(!animateDrag || isFirefox) && <animate attributeName="width" from="0" to={widthValue} dur="1s" fill="freeze" />}
                            </rect>
                            <g id="Ellipse_164" data-name="Ellipse 164" transform={currentStatus} fill="#fff" stroke="#2ecf96" stroke-width="5" style={{cursor: "pointer"}}>
                                <animateTransform attributeType="XML" attributeName="transform" type="translate" from="0 7.756" to={knobToValue} dur="1s"/>
                                <circle cx="14.836" cy="14.836" r="14.836" stroke="none"/>
                                <circle cx="14.836" cy="14.836" r="12.336" fill="none"/>
                            </g>
                            <rect id="Rectangle_1624" data-name="Rectangle 1624" width="5.563" height="22.254" rx="2" transform="translate(0 11.465)" fill="#2ecf96"/>
                        </g>
                        <rect id="Rectangle_1625" data-name="Rectangle 1625" width="5.563" height="22.254" rx="2" transform="translate(691.821 11.465)" fill="#ededed"/>
                    </g>
                    </g>
                </g>
            </svg>
            <S.LinearSliderLabel>ausgewogene Ernährung</S.LinearSliderLabel>
            <S.LinearSliderLabel2>gesunde Ernährung</S.LinearSliderLabel2>
            <S.LinearSliderLabel3>sehr gesunde Ernährung</S.LinearSliderLabel3>
        </S.LinearSliderContainer>
    )
}

export default LinearSlider
