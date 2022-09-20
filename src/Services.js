/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import cmIcon from './images/what-can-cm-icon.svg';
import cmImage from './images/what-can-cm-image.svg';
import ppcIcon from './images/what-can-ppc-icon.svg';
import ppcImage from './images/what-can-ppc-image.svg';
import seoIcon from './images/what-can-seo-icon.svg';
import seoImage from './images/what-can-seo-image.svg';

const servicesDivStyles = css`
  position: relative;
  margin: 0 80px 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const servicesDescriptionStyles = css`
  width: 300px;
`;

const infoStyles = css`
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  line-height: 46px;
`;

const headline2Styles = css`
  font-size: 34px;
  font-weight: bold;
  line-height: 30px;
  text-align: left;
`;

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
  margin: 30px auto 36px 0;
`;

const textStyles = css`
  text-align: left;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
`;

const referencesStyles = css`
  align-self: end;
`;

const latestWorkStyles = css`
  font-weight: 300;
  font-size: 18px;
  text-align: right;
`;

const ourReferencesStyles = css`
  font-weight: 600;
  font-size: 18px;
  text-align: right;
`;

const boxDivStyles = css`
  display: flex;
  padding: 0 60px 0 60px;
`;

const boxStyles = css`
  width: 350px;
  height: 500px;
  border-radius: 4px;
  border: 1px solid #e8ecf2;
  margin: 16px;
  :hover {
    box-shadow: 0 12px 24px 0 rgba(175, 184, 202, 0.2);
  }
`;

const serviceImageStyles = css`
  padding: 30px;
  width: 80%;
`;

const serviceDivStyles = css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 30px 250px 40px 30px;
  grid-template-areas:
    '. headlineThin icon .'
    '. headlineThick icon .'
    '. description description .'
    '. description description .';
`;

const marketingServicesHeaderStyles1 = css`
  grid-area: headlineThin;
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  text-align: left;
`;

const marketingServicesHeaderStyles2 = css`
  grid-area: headlineThick;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin-bottom: 10px;
`;

const iconStyles = css`
  grid-area: icon;
  margin-top: 10px;
`;

const descriptionStyles = css`
  grid-area: description;
  text-align: left;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  margin: 0;
`;

const arrowButtonStyles = css`
  display: flex;
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

export function Services() {
  return (
    <section>
      <div css={servicesDivStyles}>
        <div css={servicesDescriptionStyles}>
          <div css={infoStyles}>What can we do for you?</div>
          <div css={headline2Styles}>Our services</div>
          <hr css={lineStyles} />
          <div css={textStyles}>
            We bring the 'technical' and 'creative' together <br /> while
            serving our core fundamental services.
          </div>
        </div>
        <div css={referencesStyles}>
          <div css={latestWorkStyles}>See our latest works</div>
          <div css={ourReferencesStyles}>Our References</div>
        </div>
      </div>
      <div css={boxDivStyles}>
        <div css={boxStyles}>
          <img css={serviceImageStyles} src={seoImage} alt="" />
          <div css={serviceDivStyles}>
            <div css={marketingServicesHeaderStyles1}>Search Engine</div>
            <div css={marketingServicesHeaderStyles2}>Optimization (SEO)</div>
            <img css={iconStyles} src={seoIcon} alt="" />
            <div css={descriptionStyles}>
              Websites with millions of monthly traffic choose us to develop
              their SEO strategies.
            </div>
          </div>
        </div>
        <div css={boxStyles}>
          <img css={serviceImageStyles} src={cmImage} alt="" />
          <div css={serviceDivStyles}>
            <div css={marketingServicesHeaderStyles1}>Content</div>
            <div css={marketingServicesHeaderStyles2}>Marketing</div>
            <img css={iconStyles} src={cmIcon} alt="" />
            <div css={descriptionStyles}>
              We combine large keyword analysis with creativity to define
              content creating strategy.
            </div>
          </div>
        </div>
        <div css={boxStyles}>
          <img css={serviceImageStyles} src={ppcImage} alt="" />
          <div css={serviceDivStyles}>
            <div css={marketingServicesHeaderStyles1}>Performance</div>
            <div css={marketingServicesHeaderStyles2}>Marketing (PPC)</div>
            <img css={iconStyles} src={ppcIcon} alt="" />
            <div css={descriptionStyles}>
              Finding the sweet spot of cost and performance to increase ROAS
              and make campaigns scalable.
            </div>
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
    </section>
  );
}
