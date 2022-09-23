/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Awards } from './Awards.js';
import { CaseStudies } from './CaseStudies.js';
import { Conference } from './Conference.js';
import hero from './images/homepage-hero.svg';
import SiteMenu from './images/site-menu-image.svg';
import logo from './images/zeo-logo.svg';
import { Logos } from './Logos.js';
import { References } from './References.js';
import { Resources } from './Resources.js';
import { Services } from './Services.js';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85vw;
  height: 40px;
  background-color: #fff;
  padding: 30px 90px 20px 100px;
  position: fixed;
  z-index: 1;

  nav {
    margin-left: 300px;
  }
  nav > a {
    margin-left: 20px;
    text-decoration: none;
    color: #000;
  }

  nav > img {
    margin-left: 35px;
  }
`;

const languageStyles = css`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin-left: 40px;
  text-decoration: none;
  color: #000;

  :hover {
    background-color: #e8ecf2;
  }
`;

const mainStyles = css`
  background-color: #fff;
`;

const headlineDivStyles = css`
  width: 700px;
  height: auto;
  margin: 0 auto;
  color: #012535;
`;

const infoStyles = css`
  font-weight: 600;
  font-size: 18px;
  padding-top: 140px;
  margin-bottom: 0;
  margin-top: 0;
`;

const headlineStyles = css`
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const textStyles = css`
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 300;
`;

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
`;

const buttonStyles = css`
  padding: 10px 30px;
  background-color: #cc0a4d;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  transition: 0.2s ease;

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
          <a href="link" css={languageStyles}>
            TR
          </a>
          <img src={SiteMenu} alt="site menu" />
        </nav>
      </header>

      <main css={mainStyles}>
        <div css={headlineDivStyles}>
          <h3 css={infoStyles}>
            Winner of the UK &amp; EU &amp; MENA Search Awards
          </h3>
          <h1 css={headlineStyles}>
            Tailor-made strategies to maximize your results
          </h1>
          <hr css={lineStyles} />
          <p css={textStyles}>
            Zeo is a digital marketing agency with a team of 50+ consultants.
            Using modern technology to make data-driven decisions is our
            competitive advantage. The world's most valuable brands, unicorn
            startups, and internet companies prefer to work with us to fulfill
            their digital potential.
          </p>
          <a href="link" css={buttonStyles}>
            See our success stories
          </a>
        </div>
        <img css={imageStyles} src={hero} alt="" />

        <References />

        <Services />

        <Awards />

        <Conference />

        <CaseStudies />
        <hr css={lineStyles} />

        <Logos />

        <Resources />

        <br />
        <br />
      </main>
    </div>
  );
}

export default App;
