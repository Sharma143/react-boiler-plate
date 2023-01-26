import React from 'react'

const Ratings = ({rating}) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="140.109" height="8" viewBox="0 0 140.109 8">
                <g id="Group_6433" data-name="Group 6433" transform="translate(-335.473 -469.5)">
                    <rect id="_2" data-name="2" width="8" height="24" rx="4" transform="translate(359.473 469.5) rotate(90)" fill={rating >= 1 ? "#2ECF96" : "#eaefed"} />
                    <rect id="_2-2" data-name="2" width="8" height="24" rx="4" transform="translate(388.5 469.5) rotate(90)" fill={rating >= 2 ? "#2ECF96" : "#eaefed"}/>
                    <rect id="_2-3" data-name="2" width="8" height="24" rx="4" transform="translate(417.527 469.5) rotate(90)" fill={rating >= 3 ? "#2ECF96" : "#eaefed"}/>
                    <rect id="_2-4" data-name="2" width="8" height="24" rx="4" transform="translate(446.555 469.5) rotate(90)" fill={rating >= 4 ? "#2ECF96" : "#eaefed"}/>
                    <rect id="_2-5" data-name="2" width="8" height="24" rx="4" transform="translate(475.582 469.5) rotate(90)" fill={rating >= 5 ? "#2ECF96" : "#eaefed"}/>
                </g>
            </svg>

        </div>
    )
}

export default Ratings
