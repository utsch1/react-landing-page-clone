/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Decathlon from './images/decathlon.svg';
import Hyundai from './images/hyundai.svg';
import MediaMarkt from './images/media-markt.svg';

// import Generali from './images/generali.svg';

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
            <div css={conferenceSubheaderStyles}>References &amp;</div>
            <div css={headlineStyles}>Case Studies</div>
            <hr css={lineStyles} />
            <div css={textStyles}>
              We are providing our proficiency to have the best results in our
              clients' industries.
            </div>
          </div>
        </div>
        <div css={arrowButtonStyles}>
          <button css={previousButtonStyles} onclick="plusSlides(-1)">
            &#10094;
          </button>
          <button css={nextButtonStyles} onclick="plusSlides(1)">
            &#10095;
          </button>
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
        {/* <div css={boxStyles}>
          <div>
            <div css={caseStudyStyles}>Generali SEO Case Study</div>
            <div css={sloganStyles}>
              93% Increase in Organic Traffic and 100% Increase in SEO
              Visibility
            </div>
          </div>
          <img src={Generali} alt="" />
        </div> */}
      </div>
    </section>
  );
}
