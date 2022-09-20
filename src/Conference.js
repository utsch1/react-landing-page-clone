/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import EuropeanSearchAwards from './images/european_search_awards.svg';

const backgroundDifStyles = css`
  background-color: #e8ecf2;
  height: 400px;
  width: 100%;
  position: relative;
  bottom: 800px;
`;

export function Conference() {
  return (
    <section>
      <div css={backgroundDifStyles}>#d8e1e9</div>
    </section>
  );
}
