/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ResourceAgenda from './images/resource-agenda-full.svg';
import ResourceBook from './images/resource-book.svg';

const sectionStyles = css`
  position: static;
  margin-top: 100px;
  margin-bottom: 150px;
`;

const boxDivStyles = css`
  display: flex;
  padding: 0 60px 0 60px;
`;

const resourcesDivStyles = css`
  margin: 0 500px 30px 70px;
`;

const resourcesStyles = css`
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const headlineStyles = css`
  font-size: 34px;
  font-weight: bold;
  line-height: 40px;
  text-align: left;
  margin: 0;
`;

const resourcesSubheaderStyles = css`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  margin-bottom: 10px;
`;

const textStyles = css`
  line-height: 24px;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: left;
  font-weight: 300;
`;

const boxStyles = css`
  width: 200px;
  height: 270px;
  border-radius: 4px;
  border: 1px solid #e8ecf2;
  margin: 16px;
  padding: 24px;
`;

const boxResourceBookStyles = css`
  width: auto;
  height: 310px;
  margin: 16px;
  padding-top: 10px;
`;

const caseStudyStyles = css`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 0;
  margin-bottom: 10px;
  text-align: left;
  padding: 0;
`;

const sloganStyles = css`
  line-height: 18px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 300;
  text-align: left;
  padding: 0;
`;

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
  margin: 30px auto 36px 0;
`;
const linkStyles = css`
  font-weight: 500;
  color: #273041;
`;

const moreInfoStyles = css`
  text-align: left;
  color: #a30046;
  align-self: flex-end;
`;

const moreInfoLinkStyles = css`
  text-align: left;
  text-decoration: none;
  color: #273041;
  transition: 0.2s ease;

  :hover {
    color: #a30046;
    text-decoration: underline;
  }
`;

const marketingConferencesDivStyles = css`
  width: 1070px;
  height: 200px;
  border-radius: 4px;
  border: 1px solid #e8ecf2;
  margin-left: 75px;
  margin-top: 25px;
  padding: 24px;
`;

const resourceAgendaImgStyles = css`
  position: relative;
  bottom: 106px;
  left: 250px;
  height: 120%;
`;

const digitalZoneStyles = css`
  text-align: right;
  font-size: 30px;
  font-weight: 300px;
`;

const digitalZoneLinkStyles = css`
  text-align: left;
  text-decoration: none;
  color: #a30046;
  transition: 0.2s ease;
  font-weight: 500px;

  :hover {
    text-decoration: underline;
  }
`;

const digitalZoneArrowStyles = css`
  color: #a30046;
`;

export function Resources() {
  return (
    <section css={sectionStyles}>
      <div>
        <div css={resourcesDivStyles}>
          <div css={resourcesStyles}>
            <h2 css={resourcesSubheaderStyles}>Digital Marketing</h2>
            <h2 css={headlineStyles}>Resources</h2>
            <hr css={lineStyles} />
            <div css={textStyles}>
              49 blog posts, 3 videos, 1 e-books and{' '}
              <a css={linkStyles} href="abc">
                more
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      <div css={boxDivStyles}>
        <div css={boxStyles}>
          <div>
            <h3 css={caseStudyStyles}>Zeo Blog</h3>
            <p css={sloganStyles}>
              Read the latest articles created by our experienced digital
              marketing consultants.
            </p>
          </div>
          <div css={moreInfoStyles}>
            <a css={moreInfoLinkStyles} href="abc">
              Read now
            </a>
            &nbsp; &#10142;
          </div>
        </div>
        <div css={boxStyles}>
          <div>
            <h3 css={caseStudyStyles}>
              Digital <br />
              Marketing Tools
            </h3>
            <p css={sloganStyles}>
              We have found and listed the most used 300+ digital marketing
              tools all around the world.
            </p>
            <div css={moreInfoStyles}>
              <a css={moreInfoLinkStyles} href="abc">
                See more
              </a>
              &nbsp; &#10142;
            </div>
          </div>
        </div>
        <div css={boxStyles}>
          <div>
            <h3 css={caseStudyStyles}>SEO Glossary</h3>
            <p css={sloganStyles}>
              We have listed and detailed all the SEO and digital marketing
              terms in our glossary
            </p>
          </div>
          <div css={moreInfoStyles}>
            <a css={moreInfoLinkStyles} href="abc">
              Learn more
            </a>
            &nbsp; &#10142;
          </div>
        </div>

        <img css={boxResourceBookStyles} src={ResourceBook} alt="" />
      </div>
      <div css={marketingConferencesDivStyles}>
        <h3 css={caseStudyStyles}>Digital Marketing Conferences</h3>
        <p css={sloganStyles}>
          We have compiled all the digital marketing event and conferences in
          the world on this <br /> page for you.
        </p>
        <img css={resourceAgendaImgStyles} src={ResourceAgenda} alt="" />
      </div>
      <p css={digitalZoneStyles}>
        Are you ready for <a css={digitalZoneLinkStyles}>Digitalzone?</a>{' '}
        <span css={digitalZoneArrowStyles}>&nbsp; &#10142;</span>
      </p>
    </section>
  );
}
