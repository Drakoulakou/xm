import { css } from "@emotion/css";

const styles = css`
  color: var(--white-color);
  background-color: var(--main-bg-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .step {
    padding: 10px;
  }
  p {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;

    .step {
      width: 85%;
    }
  }
`;

export default styles;
