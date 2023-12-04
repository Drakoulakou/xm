import { css } from "@emotion/css";

const styles = css`
  background-color: var(--main-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  p {
    color: var(--white-color);
    font-size: var(--very-small-font-size-14);
  }
  a {
    color: var(--red-color);
    text-decoration: none;
  }
  .text-link-align {
    display: flex;
    align-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

export default styles;
