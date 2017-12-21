// 3rd-party imports

import React from "react";
import invariant from "invariant";

import styled from "styled-components";

// component

const NOT_SET = {};

const Container = styled.span``;

const DateRange = ({ start, end = NOT_SET }) => {
    invariant(start, "expected start");

    if (end === NOT_SET) {
        return (
            <Container
            >{`${start}\u00A0\u00A0\u2014\u00A0\u00A0Present`}</Container>
        );
    }

    return (
        <Container>{`${start}\u00A0\u00A0\u2014\u00A0\u00A0${end}`}</Container>
    );
};

export default DateRange;
