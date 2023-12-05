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
  p {
    font-weight: 400;
    font-size: var(--small-font-size-16);
    color: var(--light-grey-color);
    margin: 0;
  }
  & > p {
    padding: 0 25px;
  }
  a {
    color: var(--white-color);
  }
  .title {
    padding: 20px;
  }
  .hero-subtitle-link-first {
    display: flex;
    font-size: var(--very-small-font-size-14);
    margin-bottom: 15px;
  }
  .hero-subtitle-link-second {
    display: flex;
    font-size: var(--very-small-font-size-14);

    @media (max-width: 480px) {
      flex-direction: column;
    }
    a {
      color: var(--red-color);
      text-decoration: none;
    }
    .asterisk {
      color: var(--red-color);
    }
  }
`;

export default styles;
