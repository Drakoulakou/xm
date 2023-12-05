import { css } from "@emotion/css";

const styles = css`
  display: flex;
  background-color: var(--black-color);
  justify-content: space-between;
  height: 113px;
  align-content: center;
  align-items: center;
  padding: 0 20px;

  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    padding: 0 20px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  @media (max-width: 1024px) {
    justify-content: center;

    ul {
      display: none;
    }
  }
`;

export default styles;
