import { css } from "@emotion/css";

const styles = css`
  max-height: 700px;
  display: flex;
  margin: 15px;
  justify-content: space-between;
  background-color: var(--dark-blue-color);
  border-radius: 10px;
  padding: 25px;

  h3 {
    font-size: 25px;
    font-weight: 700;
  }

  .advantageCard-title {
    margin-bottom: 0;
  }

  .advantageCard-title-second {
    margin-top: 0;
  }

  hr {
    margin-left: 0;
  }

  .advantageCard-subtitle {
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 100px;
    width: 600px;
  }

  p {
    width: 100%;
    max-width: 200px;
    text-align: left;
  }
`;

export default styles;
