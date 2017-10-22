// 3rd-party imports

import React from "react";

import styled from "styled-components";

// component

const ResumeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;
    background: #adb5bd;

    -webkit-print-color-adjust: exact;

    @media print {
        background: #fff;
    }
`;

const Page = styled.div`
    width: 21cm;
    height: 29.69cm;
    position: relative;
    page-break-after: auto;
    overflow: hidden;

    background-color: #fff;

    margin-top: 15px;
    margin-bottom: 15px;

    &:first-of-type {
        margin-top: 30px;
    }

    &:last-of-type {
        margin-bottom: 30px;
    }

    @media print {
        border: none;
        margin-top: 0;
        margin-bottom: 0;

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

const Resume = () => {
    return (
        <ResumeWrapper>
            <Page>hello</Page>
            <Page>world</Page>
        </ResumeWrapper>
    );
};

export default Resume;
