/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import hero from './images/homepage-hero.svg';
import logo from './images/zeo-logo.svg';
import { References } from './References.js';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 20px 20px 20px 65px;
  position: fixed;

  nav > a {
    margin-left: 20px;
    text-decoration: none;
    color: #000;
  }

  > div {
    border: 1px solid #000;
    border-radius: 5px;
    width: 40px;
    height: 40px;
  }

  div > a {
    text-decoration: none;
    color: #000;
  }
`;

const mainStyles = css`
  background-color: #e8ecf2;
`;

const HeadlineDivStyles = css`
  width: 700px;
  height: auto;
  margin: 0 auto;
  color: #012535;
`;

const InfoStyles = css`
  font-weight: 600;
  font-size: 18px;
  padding-top: 140px;
`;

const HeadlineStyles = css`
  font-size: 50px;
  font-weight: bold;
  line-height: 60px;
  margin-bottom: 20px;
`;

const textStyles = css`
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
`;

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

const imageStyles = css`
  display: block;
  margin-bottom: 70px;
`;

function App() {
  return (
    <div>
      <header css={headerStyles}>
        <img src={logo} alt="zeo" />
        <nav>
          <a href="link">Services</a>
          <a href="link">References</a>
          <a href="link">Resources</a>
          <a href="link">Events</a>
          <a href="link">Tools</a>
          <a href="link">About us</a>
          <a href="link">Contact us</a>
        </nav>
        <div>
          <a href="link">TR</a>
        </div>
      </header>

      <main css={mainStyles}>
        <div css={HeadlineDivStyles}>
          <div css={InfoStyles}>
            Winner of the UK &amp; EU &amp; MENA Search Awards
          </div>
          <div css={HeadlineStyles}>
            Tailor-made strategies to maximize your results
          </div>
          <hr css={lineStyles} />
          <div css={textStyles}>
            Zeo is a digital marketing agency with a team of 50+ consultants.
            Using modern technology to make data-driven decisions is our
            competitive advantage. The world's most valuable brands, unicorn
            startups, and internet companies prefer to work with us to fulfill
            their digital potential.
          </div>
          <a href="link" css={ButtonStyles}>
            See our success stories
          </a>
        </div>
        <img css={imageStyles} src={hero} alt="" />

        <References />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}

export default App;
