/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Decathlon from './images/decathlon.svg';
import Hyundai from './images/hyundai.svg';
import MediaMarkt from './images/media-markt.svg';

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
  margin: 0;
  padding: 0;
`;

const conferenceSubheaderStyles = css`
  font-weight: 300;
  font-size: 16px;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 0;
  padding: 0;
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

const arrowButtonStyles = css`
  position: relative;
  bottom: 70px;
  left: 350px;
`;

const previousButtonStyles = css`
  border: none;
  font-size: 30px;
  background-color: #fff;
  user-select: none;
  margin-left: 80px;
`;

const nextButtonStyles = css`
  border: none;
  font-size: 30px;
  background-color: #fff;
  margin-left: 70px;
  user-select: none;
`;

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
  margin: 30px auto 36px 0;
`;

export function CaseStudies() {
  return (
    <section css={sectionStyles}>
      <div>
        <div css={conferenceDivStyles}>
          <div css={conferenceStyles}>
            <h3 css={conferenceSubheaderStyles}>References &amp;</h3>
            <h2 css={headlineStyles}>Case Studies</h2>
            <hr css={lineStyles} />
            <p css={textStyles}>
              We are providing our proficiency to have the best results in our
              clients' industries.
            </p>
          </div>
        </div>
        <div css={arrowButtonStyles}>
          <button css={previousButtonStyles}>&#10094;</button>
          <button css={nextButtonStyles}>&#10095;</button>
        </div>
      </div>
      <div css={boxDivStyles}>
        <div css={boxStyles}>
          <div>
            <div css={caseStudyStyles}>Decathlon SEO Case Study</div>
            <div css={sloganStyles}>Stay Active, Stay Optimized!</div>
          </div>
          <img src={Decathlon} alt="" />
        </div>
        <div css={boxStyles}>
          <div>
            <div css={caseStudyStyles}>Hyundai SEO Case Study</div>
            <div css={sloganStyles}>
              82% Increase in Organic Sessions Thanks to SEO Optimization
            </div>
          </div>
          <img src={Hyundai} alt="" />
        </div>
        <div css={boxStyles}>
          <div>
            <div css={caseStudyStyles}>MediaMarkt SEO Case Study</div>
            <div css={sloganStyles}>Chasing Every Little Click</div>
          </div>
          <img src={MediaMarkt} alt="" />
        </div>
      </div>
    </section>
  );
}
