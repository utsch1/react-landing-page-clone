/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const sectionStyles = css`
  position: static;
  margin-top: 100px;
  margin-bottom: 150px;
`;

const boxDivStyles = css`
  display: flex;
  padding: 0 60px 0 60px;
`;

const conferenceDivStyles = css`
  margin: 0 500px 30px 70px;
`;

const conferenceStyles = css`
  position: relative;
  padding: 0;
`;

const headlineStyles = css`
  font-size: 34px;
  font-weight: bold;
  line-height: 40px;
  text-align: left;
`;

const conferenceSubheaderStyles = css`
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
  width: 300px;
  height: 400px;
  border-radius: 2px;
  border: 1px solid #e8ecf2;
  margin: 16px;
  :hover {
    box-shadow: 0 12px 24px 0 rgba(175, 184, 202, 0.2);
  }
`;

const caseStudyStyles = css`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const sloganStyles = css`
  line-height: 18px;
  margin-top: 15px;
  margin-bottom: 30px;
  font-weight: 300;
`;

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
  margin: 30px auto 36px 0;
`;

export function Resources() {
  return (
    <section css={sectionStyles}>
      <div>
        <div css={conferenceDivStyles}>
          <div css={conferenceStyles}>
            <div css={conferenceSubheaderStyles}>Digital Marketing</div>
            <div css={headlineStyles}>Resources</div>
            <hr css={lineStyles} />
            <div css={textStyles}>
              49 blog posts, 3 videos, 1 e-books and <a href="abc">more</a>.
            </div>
          </div>
        </div>
      </div>
      <div css={boxDivStyles}>
        <div css={boxStyles}>
          <div>
            <div css={caseStudyStyles}>Zeo Blog</div>
            <div css={sloganStyles}>
              Read the latest articles created by our experienced digital
              marketing consultants.
            </div>
          </div>
          <div>Read now</div>
        </div>
        <div css={boxStyles}>
          <div>
            <div css={caseStudyStyles}>Digital Marketing Tools</div>
            <div css={sloganStyles}>
              We have found and listed the most used 300+ digital marketing
              tools all around the world.
            </div>
            <div>See more</div>
          </div>
        </div>
        <div css={boxStyles}>
          <div>
            <div css={caseStudyStyles}>SEO Glossary</div>
            <div css={sloganStyles}>
              We have listed and detailed all the SEO and digital marketing
              terms in our glossary
            </div>
          </div>
          <div>Learn more</div>
        </div>
      </div>
    </section>
  );
}
