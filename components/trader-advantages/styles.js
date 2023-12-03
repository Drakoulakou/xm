import { css } from "@emotion/css";

const styles = css`
  background-color: var(--main-bg-color);
  // background-image: url("/assets/vector.svg");
  // background-size: cover;
  // background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: var(--medium-font-size-25);
    font-weight: 300;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 27px;
    max-width: 635px;
    text-align: center;
  }

  .inline {
    display: flex;
    flex-flow: row;
    justify-content: center;

    @media (max-width: 480px) {
      flex-flow: column;
    }
  }
`;

export default styles;
