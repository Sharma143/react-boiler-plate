import styled from 'styled-components';

export const Tooltip = styled.div`
&:hover > div {
    visibility: visible;
}
`;

export const TooltipText = styled.div`
visibility: hidden;
width: 250px;
background-color: #2ECF96;
color: #fff;
text-align: center;
border-radius: 4px;
padding: 5px 0;
position: absolute;
z-index: 1;
`;