import { css } from "@emotion/css";

const styles = css`
  color: var(--white-color);
  font-weight: 100;
  font-size: 24px;
  background-color: var(--green-color);
  width: 345px;
  height: 40px;
  font-family: "Bebas Neue";
  margin: 25px;
  border: none;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 290px;
  }
`;

export default styles;
