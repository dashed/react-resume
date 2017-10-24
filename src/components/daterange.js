// 3rd-party imports

import React from "react";
import invariant from "invariant";

import styled from "styled-components";

// component

const NOT_SET = {};

const Container = styled.span`
    font-variant: small-caps;
`;

const DateRange = ({ start, end = NOT_SET }) => {
    invariant(start, "expected start");

    if (end === NOT_SET) {
        return <Container>{`${start} \u2014 Present`}</Container>;
    }

    return <Container>{`${start} \u2014 ${end}`}</Container>;
};

export default DateRange;
