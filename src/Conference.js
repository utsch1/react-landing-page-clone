/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Conference22 from './images/conference-22.webp';

// import Event from './images/event-europa-full.webp';

const backgroundDivStyles = css`
  background-color: #f5f8fc;
  height: 780px;
  width: 100%;
  position: relative;
  padding: 0;
  margin: 0;
`;

const conferenceDivStyles = css`
  width: 420px;
  margin: 0 700px 30px 70px;
`;

const imageStyles = css`
  text-align: left;
  padding-top: 80px;
  padding-bottom: 40px;
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

const lineStyles = css`
  width: 50px;
  height: 2px;
  background-color: #cc0a4d;
  border: 0;
  margin: 30px auto 36px 0;
`;

const textStyles = css`
  line-height: 24px;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: left;
  font-weight: 300;
`;

const buttonStyles = css`
  padding: 10px 30px;
  background-color: #cc0a4d;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  transition: 0.2s ease;
  margin-right: 270px;
  margin-left: 0;

  :hover {
    background-color: #a30046;
  }
`;

// const eventDivStyles = css`
//   position: relative;
//   bottom: 50px;
//   left: 100px;
// `;

// const eventImgStyles = css`
//   width: 150%;
// `;

export function Conference() {
  return (
    <section>
      <div css={backgroundDivStyles}>
        <div css={conferenceDivStyles}>
          <div css={imageStyles}>
            <img src={Conference22} alt="" />
          </div>
          <div css={conferenceStyles}>
            <div css={conferenceSubheaderStyles}>
              Digitalzone brings top marketing professionals since 2013
            </div>
            <div css={headlineStyles}>
              Largest Digital Marketing Conference of Eastern <br /> Europe
              &amp; MENA
            </div>
            <hr css={lineStyles} />
            <div css={textStyles}>
              We organize Digitalzone conference since 2013 to bring the
              brightest minds of digital marketing, like Rand Fishkin, Wil
              Reynolds, Aleyda Solis and Brian Dean with Europe's digital
              marketing community together. <br />
              It is not only a conference but also a monthly meetup where people
              can share new insights with others. Proudly speaking, we have
              reached more than 50K+ marketers within 10 years and learned
              together to be better marketers.
            </div>
          </div>
          <div>
            <a href="link" css={buttonStyles}>
              View more
            </a>
          </div>
          {/* <div css={eventDivStyles}>
            <img css={eventImgStyles} src={Event} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
