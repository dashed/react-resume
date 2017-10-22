// 3rd-party imports

import React from "react";

import styled, { injectGlobal } from "styled-components";

// local imports

import Canvas from "./canvas";
import PageBase from "./page";

// component

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
`;

const Page = PageBase.extend`
    padding: 0.5in;
`;

const Header = styled.div`
    font-weight: 900;
    font-size: 32px;
    text-align: center;
`;

const Resume = () => {
    return (
        <Canvas>
            <Page>
                <Header>Your Name</Header>
                foo bar
            </Page>
            <Page>world</Page>
        </Canvas>
    );
};

export default Resume;
