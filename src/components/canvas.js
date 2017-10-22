// 3rd-party imports

import styled from "styled-components";

// component

const Canvas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #e9ecef;

    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    @media print {
        display: block;

        background-color: #fff;
    }
`;

export default Canvas;
