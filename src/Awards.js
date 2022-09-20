/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import EuropeanSearchAwards from './images/european_search_awards.svg';
import World from './images/international-world.svg';

const awardsStyles = css`
  position: relative;
  margin: 150px 80px 40px 80px;
  padding: 0;
`;

const infoStyles = css`
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  line-height: 46px;
  margin-top: 70px;
`;

const headline2Styles = css`
  font-size: 34px;
  font-weight: bold;
  line-height: 40px;
  text-align: left;
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
  left: 633px;
  bottom: 700px;
`;

export function Awards() {
  return (
    <section>
      <div css={awardsStyles}>
        <div css={infoStyles}>
          Every new client is an opportunity for having another award
        </div>
        <div css={headline2Styles}>
          Recognized by industry&#39;s best <br /> minds
        </div>
        <hr css={lineStyles} />
      </div>
      <div css={awardsDivStyles}>
        <img src={EuropeanSearchAwards} alt="European Search Awards" />
        <div css={awardHeaderStyles}>Best SEO Campaign (Low Budget)</div>
        <div css={awardSubheaderStyles}>
          News &amp; Discover Boosting the Traffic!
        </div>
        <div css={textStyles}>
          We won the Best Low Budget Campaign (SEO) award for our work for
          Ajansspor at the European Search Awards 2022 where the best companies
          specializing in PPC, SEO, and Content Marketing in various sectors are
          awarded. In the work we won this award, we managed the crawl budget of
          Ajansspor, which has hundreds of thousands of pages, and complied with
          all the content guidelines that Google offers specifically for news
          sites.
        </div>
        <div css={arrowButtonStyles}>
          <button css={previousButtonStyles} onclick="plusSlides(-1)">
            &#10094;
          </button>
          <button css={nextButtonStyles} onclick="plusSlides(1)">
            &#10095;
          </button>
        </div>
        <div css={worldImageStyles}>
          <img src={World} alt="" />
        </div>
      </div>
    </section>
  );
}
