// 3rd-party imports

import React from "react";

import styled, { injectGlobal } from "styled-components";

import "styled-components-tachyons/variables.css";
import tachyons from "styled-components-tachyons";

// local imports

import PageBase from "./page";
import Canvas from "./canvas";

import DateRange from "./daterange";
import SkillsTools from "./skillstools";
import SummaryLine from "./summary_line";

// global styles

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');

  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 13px;

    font-kerning: normal;
  }

  a {
    color: #0366d6;
    text-decoration: none;
  }
`;

// components

const Page = PageBase.extend`
    padding: 0.5in;

    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    ${tachyons};

    font-weight: bold;
    font-size: 32px;
    text-align: center;
`;

const Contact = styled.div`
    ${tachyons};

    display: flex;
`;

const ContactGutter = styled.div`
    flex-grow: 10;
`;

const Link = styled.a`
    font-family: "Source Code Pro", monospace;

    font-weight: 500;
`;

const Phone = styled.span`
    font-family: "Source Code Pro", monospace;

    font-weight: 500;
`;

const SubHeader = styled.div`
    ${tachyons};
    font-weight: bold;
    font-size: 18px;
`;

const WorkExperience = styled.div`
    ${tachyons};
`;

const LocationTime = styled.div`
    ${tachyons};
    display: flex;
`;

const LocationTimeGutter = styled.div`
    flex-grow: 10;
`;

const Position = styled.div`
    ${tachyons};
    font-style: italic;
`;

const SubSubHeader = styled.div`
    ${tachyons};
    font-weight: bold;
`;

const Education = styled.div``;

const EducationLine = styled.div`
    ${tachyons};
    display: flex;
`;

const EducationGutter = styled.div`
    flex-grow: 10;
`;

const OpenSource = styled.div`
    ${tachyons};
`;

const OpenSourceLine = styled.div`
    ${tachyons};
`;

const Gutter = styled.div`
    flex-grow: 10;
`;

const Personal = () => {
    return (
        <Canvas>
            <Page>
                {/* Header */}

                <Header mb2>{`Your Name`}</Header>

                <Contact mb4>
                    <strong>{`E-mail:\u00A0\u00A0`}</strong>
                    <Link href="mailto:email@email.com">{`email@email.com`}</Link>
                    <ContactGutter />
                    <strong>{`Phone:\u00A0\u00A0`}</strong>
                    <Phone>{`+1-123-456-7890`}</Phone>
                    <i>{`\u00A0\u00A0(mobile)`}</i>
                </Contact>

                {/* Work Experience */}

                <SubHeader mb3>{"Work Experience"}</SubHeader>

                <WorkExperience mb3>
                    <LocationTime mb1>
                        <strong>{"Company A"}</strong>
                        <LocationTimeGutter />
                        <DateRange start="June 2017" />
                    </LocationTime>

                    <Position mb2>{`Full-Stack Developer`}</Position>

                    <SkillsTools
                    >{`git, JavaScript, node.js, HTML, CSS`}</SkillsTools>

                    <SummaryLine>{`Watched cat videos.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals close-up with a wide-angle lens.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals wearing hats close-up with a wide-angle lens.`}</SummaryLine>
                </WorkExperience>

                <WorkExperience mb3>
                    <LocationTime mb1>
                        <strong>{"Company B"}</strong>
                        <LocationTimeGutter />
                        <DateRange start="August 2015" end="June 2017" />
                    </LocationTime>

                    <Position mb2>{`Full-Stack Developer`}</Position>

                    <SkillsTools
                    >{`git, JavaScript, node.js, HTML, CSS`}</SkillsTools>

                    <SummaryLine>{`Watched cat videos.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals close-up with a wide-angle lens.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals wearing hats close-up with a wide-angle lens.`}</SummaryLine>
                </WorkExperience>

                <WorkExperience mb3>
                    <LocationTime mb1>
                        <strong>{"Company C"}</strong>
                        <LocationTimeGutter />
                        <DateRange start="May 2015" end="June 2017" />
                    </LocationTime>

                    <Position mb2>{`Full-Stack Developer`}</Position>

                    <SkillsTools
                    >{`git, JavaScript, node.js, HTML, CSS`}</SkillsTools>

                    <SummaryLine>{`Watched cat videos.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals close-up with a wide-angle lens.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals wearing hats close-up with a wide-angle lens.`}</SummaryLine>
                </WorkExperience>

                <WorkExperience mb3>
                    <LocationTime mb1>
                        <strong>{"Company D"}</strong>
                        <LocationTimeGutter />
                        <DateRange start="December 2013" end="Febuary 2015" />
                    </LocationTime>

                    <Position mb2>{`Full-Stack Developer`}</Position>

                    <SkillsTools
                    >{`git, JavaScript, node.js, HTML, CSS`}</SkillsTools>

                    <SummaryLine>{`Watched cat videos.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals close-up with a wide-angle lens.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals wearing hats close-up with a wide-angle lens.`}</SummaryLine>
                </WorkExperience>

                <WorkExperience mb3>
                    <LocationTime mb1>
                        <strong>{"Company E"}</strong>
                        <LocationTimeGutter />
                        <DateRange start="July 2012" end="December 2013" />
                    </LocationTime>

                    <Position mb2>{`Full-Stack Developer`}</Position>

                    <SkillsTools
                    >{`git, JavaScript, node.js, HTML, CSS`}</SkillsTools>

                    <SummaryLine>{`Watched cat videos.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals close-up with a wide-angle lens.`}</SummaryLine>

                    <SummaryLine
                    >{`Watched animals wearing hats close-up with a wide-angle lens.`}</SummaryLine>
                </WorkExperience>

                <Gutter />

                <center>{`1 of 2`}</center>
            </Page>

            <Page>
                <SubHeader mb3>{"Technical Skills"}</SubHeader>

                <SubSubHeader
                    mb1
                >{`Programming languages (not full list):`}</SubSubHeader>

                <SummaryLine
                >{`Proficient: Rust, C, Java, JavaScript, HTML, CSS, SQL, Clojure`}</SummaryLine>

                <SummaryLine
                >{`Knowledgeable: C++, Python, bash scripting, Go (golang), Haskell`}</SummaryLine>

                <SubSubHeader
                    mb1
                >{`Tools, utilities, and other miscellaneous:`}</SubSubHeader>

                <SummaryLine
                >{`Proficient: git (version control), Linux (and Unix), vim (and vi)`}</SummaryLine>

                <SummaryLine
                >{`Knowledgeable: Make, PostgreSQL, MySQL, Apache, nginx`}</SummaryLine>

                <SubSubHeader mb1>{`Web Development:`}</SubSubHeader>

                <SummaryLine
                >{`Developed web applications using: Rust, node.js, Python, and Go (golang).`}</SummaryLine>

                <SummaryLine
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies porttitor lobortis. Nullam et diam in lectus facilisis euismod. Sed in nulla leo.`}</SummaryLine>

                <SummaryLine
                >{`Nunc ullamcorper vel nunc in imperdiet. Etiam posuere orci a nisl egestas sollicitudin.`}</SummaryLine>

                <SummaryLine
                >{`Donec porta euismod nibh, ut pretium tellus sagittis et.`}</SummaryLine>

                <SubSubHeader mb1>{`Devops:`}</SubSubHeader>

                <SummaryLine
                >{`Devops on: Heroku, Google Cloud Platform, Amazon Web Services (AWS).`}</SummaryLine>

                <SummaryLine
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies porttitor lobortis. Nullam et diam in lectus facilisis euismod. Sed in nulla leo.`}</SummaryLine>

                <SummaryLine
                >{`Nunc ullamcorper vel nunc in imperdiet. Etiam posuere orci a nisl egestas sollicitudin.`}</SummaryLine>

                <SummaryLine
                >{`Donec porta euismod nibh, ut pretium tellus sagittis et.`}</SummaryLine>

                <SubSubHeader mb1>{`System Administration:`}</SubSubHeader>

                <SummaryLine
                >{`Operating Systems: Ubuntu, Red Hat, Solaris.`}</SummaryLine>

                <SummaryLine
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies porttitor lobortis. Nullam et diam in lectus facilisis euismod. Sed in nulla leo.`}</SummaryLine>

                <SummaryLine
                >{`Nunc ullamcorper vel nunc in imperdiet. Etiam posuere orci a nisl egestas sollicitudin.`}</SummaryLine>

                <SummaryLine
                >{`Donec porta euismod nibh, ut pretium tellus sagittis et.`}</SummaryLine>

                <SubHeader mb3 mt3>
                    {"Projects"}
                </SubHeader>

                <OpenSource mb3>
                    <OpenSourceLine mb1>
                        <strong>{`Project A`}</strong>
                        <span>{`\u00A0\u00A0\u2014\u00A0\u00A0`}</span>
                        <Link href="https://github.com/user/project_a">{`https://github.com/user/project_a`}</Link>
                    </OpenSourceLine>

                    <OpenSourceLine>
                        {`Developed this project in my spare time because of reasons.`}
                    </OpenSourceLine>
                </OpenSource>

                <OpenSource mb3>
                    <OpenSourceLine mb1>
                        <strong>{`Project B`}</strong>
                        <span>{`\u00A0\u00A0\u2014\u00A0\u00A0`}</span>
                        <Link href="https://github.com/user/project_b">{`https://github.com/user/project_b`}</Link>
                    </OpenSourceLine>

                    <OpenSourceLine>
                        {`Developed this project in my spare time because of reasons.`}
                    </OpenSourceLine>
                </OpenSource>

                <OpenSource mb3>
                    <OpenSourceLine mb1>
                        <strong>{`Project C`}</strong>
                        <span>{`\u00A0\u00A0\u2014\u00A0\u00A0`}</span>
                        <Link href="https://github.com/user/project_c">{`https://github.com/user/project_c`}</Link>
                    </OpenSourceLine>

                    <OpenSourceLine>
                        {`Developed this project in my spare time because of reasons.`}
                    </OpenSourceLine>
                </OpenSource>

                <OpenSource mb3>
                    <OpenSourceLine mb1>
                        <strong>{`Project D`}</strong>
                        <span>{`\u00A0\u00A0\u2014\u00A0\u00A0`}</span>
                        <Link href="https://github.com/user/project_d">{`https://github.com/user/project_d`}</Link>
                    </OpenSourceLine>

                    <OpenSourceLine>
                        {`Developed this project in my spare time because of reasons.`}
                    </OpenSourceLine>
                </OpenSource>

                <OpenSource mb3>
                    <OpenSourceLine mb1>
                        <strong>{`Project E`}</strong>
                        <span>{`\u00A0\u00A0\u2014\u00A0\u00A0`}</span>
                        <Link href="https://github.com/user/project_e">{`https://github.com/user/project_e`}</Link>
                    </OpenSourceLine>

                    <OpenSourceLine>
                        {`Developed this project in my spare time because of reasons.`}
                    </OpenSourceLine>
                </OpenSource>

                <SubHeader mb3 mt3>
                    {"Education"}
                </SubHeader>

                <Education>
                    <EducationLine mb1>
                        <strong>{`University of Utopia`}</strong>
                        <EducationGutter />
                        <span>{`City, State/Province, Country`}</span>
                    </EducationLine>
                    <EducationLine>
                        <span>{`B.Sc. (Honours), Computer Science`}</span>
                        <EducationGutter />
                        <span>{`2017`}</span>
                    </EducationLine>
                </Education>

                <Gutter />

                <center>{`2 of 2`}</center>
            </Page>
        </Canvas>
    );
};

export default Personal;
