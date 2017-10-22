// 3rd-party imports

import React from "react";

import styled, { injectGlobal } from "styled-components";

// component

const Page = styled.div`
    width: 21cm;
    height: 29.69cm;
    position: relative;
    page-break-after: auto;
    overflow: hidden;

    background-color: #fff;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);

    margin-top: 15px;
    margin-bottom: 15px;

    &:first-of-type {
        margin-top: 30px;
    }

    &:last-of-type {
        margin-bottom: 30px;
    }

    @media print {
        box-shadow: none;

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

export default Page;
