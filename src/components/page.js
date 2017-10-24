// 3rd-party imports

import styled from "styled-components";

// component

const Page = styled.div`
    width: 8.5in;
    height: 11in;

    margin-right: auto;
    margin-left: auto;

    position: relative;
    overflow: hidden;

    background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#fff")};
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);

    margin-top: 15px;
    margin-bottom: 15px;

    &:first-of-type {
        margin-top: 0px;
    }

    &:last-of-type {
        margin-bottom: 0px;
    }

    @media print {
        box-shadow: none;

        margin: 0;
        box-sizing: border-box;
        page-break-after: always;

        &:first-of-type {
            margin: 0;
        }

        &:last-of-type {
            margin: 0;
        }
    }
`;

export default Page;
