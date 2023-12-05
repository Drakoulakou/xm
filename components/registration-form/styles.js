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
    margin: 0 4px;
  }

  .text-link-align {
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
    padding: 0 25px;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  a {
    color: var(--red-color);
    text-decoration: none;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
`;

export default styles;
