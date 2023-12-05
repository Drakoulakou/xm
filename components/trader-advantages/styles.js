import { css } from "@emotion/css";

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: var(--medium-font-size-25);
    font-weight: 300;
    color: white;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    padding-bottom: 27px;
    max-width: 635px;
    text-align: center;
  }

  & > p {
    padding: 0 25px;
    margin-bottom: 15px;
  }

  .inline {
    display: flex;
    flex-flow: row;
    justify-content: center;
    max-width: 1200px;

    @media (max-width: 480px) {
      flex-flow: column;
    }
  }
`;

export default styles;
