// 3rd-party imports

import React from "react";

import styled, { injectGlobal } from "styled-components";

// local imports

import Canvas from "./canvas";
import Page from "./page";

// component

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12pt;
  }
`;

const Margin = styled.div`
    margin-left: 1in;
    margin-right: 1in;
    margin-top: 0.75in;
    margin-bottom: 0.75in;
`;

const Header = styled.div`
    font-weight: 900;
    font-size: 24.88pt;
    text-align: center;
`;

const Resume = () => {
    return (
        <Canvas>
            <Page>
                <Margin>
                    <Header>Alberto P. Leal</Header>
                </Margin>
            </Page>
            <Page>world</Page>
        </Canvas>
    );
};

export default Resume;
