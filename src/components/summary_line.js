// 3rd-party imports

import React from "react";

import styled from "styled-components";
import tachyons from "styled-components-tachyons";

// component

const Container = styled.div`
    ${tachyons};
    display: flex;
    text-align: justify;
`;

const Bullet = styled.div`
    ${tachyons};
`;

const SummaryLine = ({ children }) => {
    return (
        <Container lh_copy mb1>
            <Bullet mr2>{`\u2014`}</Bullet>
            {children}
        </Container>
    );
};

export default SummaryLine;
