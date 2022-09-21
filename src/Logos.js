/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Amazon from './images/amazon.webp';
import Bayer from './images/bayer.webp';
import bmw from './images/bmw.webp';
import Pepsico from './images/pepsico.webp';

const logosStyles = css`
  display: flex;
  align-items: center;
  margin: 100px 200px;
`;

const previousButtonStyles = css`
  border: none;
  font-size: 30px;
  background-color: #fff;
  user-select: none;
  color: #d2d5db;
  margin-right: 70px;
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
  width: 80%;
  filter: grayscale(1);

  :hover {
    filter: none;
  }
`;

export function Logos() {
  return (
    <div css={logosStyles}>
      <div>
        <button css={previousButtonStyles}>&#10094;</button>
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={Amazon} alt="Amazon" />
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={bmw} alt="BMW" />
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={Pepsico} alt="Pepsico" />
      </div>
      <div css={logoDivStyles}>
        <img css={logoImgStyles} src={Bayer} alt="Bayer" />
      </div>
      <div>
        <button css={nextButtonStyles}>&#10095;</button>
      </div>
    </div>
  );
}
