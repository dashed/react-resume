// 3rd-party imports

import React from "react";

import styled from "styled-components";
import tachyons from "styled-components-tachyons";

// component

const Container = styled.div`
    ${tachyons};
`;

const SkillsTools = ({ children }) => {
    return (
        <Container mb2>
            <i>{`Skills / Tools used:\u00A0\u00A0`}</i>
            {children}
        </Container>
    );
};

export default SkillsTools;
