/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import hero from './images/homepage-hero.svg';
import logo from './images/zeo-logo.svg';

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
  background-color: #d2d5db;
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
        {/* first carousel */}
        <div>
          <div>
            <div>
              <img src="" alt="Rand Fishkin" />
              <h5>Rand Fishkin</h5>
              <h6>Founder - Moz &amp; SparkToro</h6>
            </div>
            <p>
              The Digitalzone conference organized by Zeo was one of the most
              interesting experiences of my life, both as a speaker and as a
              listener. The participants, the content, the venue and the
              interest of the organizers showed that this was an event not to be
              missed.
            </p>
          </div>
          <div>
            <div>
              <img src="" alt="Didem Namver" />
              <h5>Didem Namver</h5>
              <h6>Head of Digital Marketing &amp; eCommerce - Pepsico</h6>
            </div>
            <p>
              At Zeo, we are in contact with a team of experts who follow their
              work closely and respond quickly and clearly to the needs. They
              always take us one step further with their proactive suggestions
              and actions.
            </p>
          </div>
          <div>
            <div>
              <img src="" alt="Murat Özkan" />
              <h5>Murat Özkan</h5>
              <h6>Head of E-commerce at GrandVision Turkey</h6>
            </div>
            <p>
              While developing an e-commerce site instead of our old corporate
              website, we agreed with Zeo for site migration and all subsequent
              SEO activities. As of 2018, we are in the 1st place in 250 of the
              500 highest-volume words we follow and on the first page in 483.
            </p>
          </div>
          <div>
            <div>
              <img src="" alt="Mehmet Günden" />
              <h5>Mehmet Günden</h5>
              <h6>E-Commerce Manager - Little Caesers</h6>
            </div>
            <p>
              Among the prominent features of Zeo is that they are always
              solution-oriented and provide fast solutions. The analyzes,
              solutions and reports they share are always very satisfying and
              guiding. Since they always closely follow the technology and the
              trends in their fields, you can get answers to your questions as
              quickly as possible.
            </p>
          </div>
          <div>
            <div>
              <img src="" alt="Emre Baykal" />
              <h5>Emre Baykal</h5>
              <h6>Director of Digital Marketing - Acibadem Healthcare Group</h6>
            </div>
            <p>
              The Zeo team has become a stakeholder in success by looking at our
              optimization processes and our brand as their own value. We would
              like to thank all the Zeo team, who constantly improve and do not
              compromise on keeping their energies high under all conditions!
            </p>
          </div>
          <a href="link" css={ButtonStyles}>
            Contact us
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
