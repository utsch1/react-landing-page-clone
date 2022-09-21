/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import EuropeanSearchAwards from './images/european_search_awards.svg';
import World from './images/international-world.svg';

const awardsStyles = css`
  position: relative;
  margin: 150px 80px 40px 80px;
  padding: 0;
  width: 100vw;
`;

const infoStyles = css`
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  line-height: 46px;
  margin-top: 70px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const headline2Styles = css`
  font-size: 34px;
  font-weight: bold;
  line-height: 40px;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
  margin: 30px auto 36px 0;
`;

const awardsDivStyles = css`
  width: 550px;
  height: 700px;
  margin: 0 400px 30px 70px;
`;

const awardHeaderStyles = css`
  grid-area: headlineThick;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  margin-bottom: 20px;
`;

const awardSubheaderStyles = css`
  font-weight: 300;
  font-size: 18px;
  text-align: left;
`;

const textStyles = css`
  line-height: 24px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 300;
`;

const arrowButtonStyles = css`
  display: flex;
`;

const previousButtonStyles = css`
  border: none;
  font-size: 30px;
  background-color: #fff;
  user-select: none;
  color: #d2d5db;
`;

const nextButtonStyles = css`
  border: none;
  font-size: 30px;
  background-color: #fff;
  margin-left: 70px;
  user-select: none;
`;

const worldImageStyles = css`
  position: relative;
  left: 630px;
  bottom: 700px;
`;

export function Awards() {
  return (
    <section>
      <div css={awardsStyles}>
        <h3 css={infoStyles}>
          Every new client is an opportunity for having another award
        </h3>
        <h2 css={headline2Styles}>
          Recognized by industry&#39;s best <br /> minds
        </h2>
        <hr css={lineStyles} />
      </div>
      <div css={awardsDivStyles}>
        <img src={EuropeanSearchAwards} alt="European Search Awards" />
        <h3 css={awardHeaderStyles}>Best SEO Campaign (Low Budget)</h3>
        <h4 css={awardSubheaderStyles}>
          News &amp; Discover Boosting the Traffic!
        </h4>
        <p css={textStyles}>
          We won the Best Low Budget Campaign (SEO) award for our work for
          Ajansspor at the European Search Awards 2022 where the best companies
          specializing in PPC, SEO, and Content Marketing in various sectors are
          awarded. In the work we won this award, we managed the crawl budget of
          Ajansspor, which has hundreds of thousands of pages, and complied with
          all the content guidelines that Google offers specifically for news
          sites.
        </p>
        <div css={arrowButtonStyles}>
          <button css={previousButtonStyles}>&#10094;</button>
          <button css={nextButtonStyles}>&#10095;</button>
        </div>
        <div css={worldImageStyles}>
          <img src={World} alt="" />
        </div>
      </div>
    </section>
  );
}
