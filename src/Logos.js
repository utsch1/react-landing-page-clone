/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Amazon from './images/amazon.webp';
import Bayer from './images/bayer.webp';
import Pepsico from './images/pepsico.webp';

const logosStyles = css`
  display: flex;
  align-items: center;
  margin: 50px 100px;
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

const logoDivStyles = css`
  width: 200px;
`;

const logoImgStyles = css`
  width: 70%;
`;

export function Logos() {
  return (
    <div css={logosStyles}>
      <div>
        <button css={previousButtonStyles} onclick="plusSlides(-1)">
          &#10094;
        </button>
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={Amazon} alt="Amazon" />
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={Bayer} alt="BMW" />
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={Pepsico} alt="Pepsico" />
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={Bayer} alt="Bayer" />
      </div>
      <div>
        <button css={nextButtonStyles} onclick="plusSlides(1)">
          &#10095;
        </button>
      </div>
    </div>
  );
}
