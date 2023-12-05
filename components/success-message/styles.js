import { css } from "@emotion/css";

const styles = css`
  color: var(--green-color);
  padding: 50px;
  background-color: var(--ultra-light-green-color);
  margin-bottom: 25px;

  p {
    color: var(--green-color);
  }

  .inline {
    display: flex;
    flex-flow: row;
    justify-content: start;
    align-items: center;

    svg {
      margin-right: 15px;
      width: 60px;
      height: 60px;

      &.secondary {
        width: 20px;
        height: 20px;
        color: grey;
      }
    }
  }
`;

export default styles;
