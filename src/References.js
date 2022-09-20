/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Rand from './images/rand-fishkin.webp';

const ButtonStyles = css`
  padding: 10px 30px;
  background-color: #cc0a4d;
  border-radius: 20px;
  color: white;
  text-decoration: none;

  :hover {
    background-color: #a30046;
  }
`;

const slideshowContainerStyles = css`
  position: relative;
  margin: 0 40px 40px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const slidesStyles = css`
  display: none;
`;

const nameStyles = css`
  display: grid;
  grid-template-areas:
    'image customer'
    'image position';
  margin-right: 80px;
`;

const imgStyles = css`
  grid-area: image;
  margin-right: 20px;
  width: 50px;
`;

const customerNameStyles = css`
  grid-area: customer;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const positionStyles = css`
  grid-area: position;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  margin-top: -20px;
  padding: 0;
  text-align: left;
`;

const referenceStyles = css`
  width: 450px;
  text-align: left;
  font-weight: 300;
`;

const arrowButtonStyles = css`
  display: flex;
`;

const nextButtonStyles = css`
  border: none;
  font-size: 30px;
  background-color: #e8ecf2;
  margin-left: 40px;
`;

const previousButtonStyles = css`
  border: none;
  font-size: 30px;
  background-color: #e8ecf2;
`;

export function References() {
  return (
    <div css={slideshowContainerStyles}>
      <div css={slideshowContainerStyles}>
        <div css={nameStyles}>
          <img css={imgStyles} src={Rand} alt="Rand Fishkin" />
          <h5 css={customerNameStyles}>Rand Fishkin</h5>
          <h6 css={positionStyles}>Founder - Moz &amp; SparkToro</h6>
        </div>
        <div css={referenceStyles}>
          The Digitalzone conference organized by Zeo was one of the most
          interesting experiences of my life, both as a speaker and as a
          listener. The participants, the content, the venue and the interest of
          the organizers showed that this was an event not to be missed.
        </div>
      </div>
      <div css={slidesStyles}>
        <div>
          <img src="" alt="Didem Namver" />
          <h5>Didem Namver</h5>
          <h6>Head of Digital Marketing &amp; eCommerce - Pepsico</h6>
        </div>
        <p>
          At Zeo, we are in contact with a team of experts who follow their work
          closely and respond quickly and clearly to the needs. They always take
          us one step further with their proactive suggestions and actions.
        </p>
      </div>
      <div css={slidesStyles}>
        <div>
          <img src="" alt="Murat Özkan" />
          <h5>Murat Özkan</h5>
          <h6>Head of E-commerce at GrandVision Turkey</h6>
        </div>
        <p>
          While developing an e-commerce site instead of our old corporate
          website, we agreed with Zeo for site migration and all subsequent SEO
          activities. As of 2018, we are in the 1st place in 250 of the 500
          highest-volume words we follow and on the first page in 483.
        </p>
      </div>
      <div css={slidesStyles}>
        <div>
          <img src="" alt="Mehmet Günden" />
          <h5>Mehmet Günden</h5>
          <h6>E-Commerce Manager - Little Caesers</h6>
        </div>
        <p>
          Among the prominent features of Zeo is that they are always
          solution-oriented and provide fast solutions. The analyzes, solutions
          and reports they share are always very satisfying and guiding. Since
          they always closely follow the technology and the trends in their
          fields, you can get answers to your questions as quickly as possible.
        </p>
      </div>
      <div css={slidesStyles}>
        <div>
          <img src="" alt="Emre Baykal" />
          <h5>Emre Baykal</h5>
          <h6>Director of Digital Marketing - Acibadem Healthcare Group</h6>
        </div>
        <p>
          The Zeo team has become a stakeholder in success by looking at our
          optimization processes and our brand as their own value. We would like
          to thank all the Zeo team, who constantly improve and do not
          compromise on keeping their energies high under all conditions!
        </p>
      </div>
      <div css={arrowButtonStyles}>
        <button css={previousButtonStyles} onclick="plusSlides(-1)">
          &#10094;
        </button>
        <button css={nextButtonStyles} onclick="plusSlides(1)">
          &#10095;
        </button>
      </div>
      <a href="link" css={ButtonStyles}>
        Contact us
      </a>
    </div>
  );
}
