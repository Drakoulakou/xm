import { css } from "@emotion/css";

const styles = css`
  background-image: url(/assets/general-0-swaps-desktop.svg);
  background-color: var(--main-bg-color);
  background-position: center;
  background-size: cover;
  height: calc(100vh - 113px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;

  h1 {
    margin: 0;
    font-weight: 400;
    font-size: 35px;
  }
`;

export default styles;
