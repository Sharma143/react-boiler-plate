import React, {useState} from 'react';
import * as S from "./collapsibleAccordion.styles";

// Images
import Expand from "assets/images/expand.svg";
import Contract from "assets/images/contract.svg";

const CollapsibleAccordion = ({data}) => {

    const [activeAccordion, setActiveAccordion] = useState(data.length > 0 ? data[0].id : '0');
    
    return (
        <S.AccordionContainer>
            {data.map(accordion => {
                return (
                    <S.Accordion active={activeAccordion === accordion.id}  onClick={() => setActiveAccordion(accordion.id)} key={accordion.id}>
                        <S.AccordionHeading>{accordion.heading}</S.AccordionHeading>
                        <S.AccordionIcon
                            src={activeAccordion === accordion.id ? Contract : Expand} 
                            lt={activeAccordion === accordion.id ? "Contract"+activeAccordion : "Expand"+activeAccordion} 
                        />
                        <S.AccordionContent active={activeAccordion === accordion.id}>
                            {accordion.content()}
                        </S.AccordionContent>
                    </S.Accordion>
                )
            })
            }
            {data.length === 0 && <S.NoDataFound active>No Data Found</S.NoDataFound>}
        </S.AccordionContainer>
    )
}

export default CollapsibleAccordion
