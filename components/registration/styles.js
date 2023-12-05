import { css } from "@emotion/css";

const styles = css`
  color: var(--white-color);
  text-align: center;
  padding-top: 50px;

  h1 {
    font-size: 34px;
    padding-bottom: 5px;
  }

  p {
    font-size: var(--small-font-size-16);
    font-weight: 400;
  }
  .tableInfo {
    display: flex;
    justify-content: center;
    margin: 75px 200px 50px;
    padding-bottom: 50px;
    margin: 50px 200px 0;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      margin: 51px 170px;
    }
  }
  .calendarInfo {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    min-width: 210px;
    font-size: 15px;
    @media (max-width: 480px) {
      border-top: none;
      padding: 13px;
    }
    svg {
      height: 26px;
    }
  }
  .clockInfo {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 27px;
    min-width: 100px;
    @media (max-width: 480px) {
      border: none;
      padding: 13px;
    }
    svg {
      height: 26px;
    }
  }
  .locationInfo {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 21px 18px 0px 17px;
    min-width: 210px;
    @media (max-width: 480px) {
      border-bottom: none;
    }
    svg {
      height: 26px;
    }
    p {
      max-width: 210px;
    }
  }
`;

export default styles;
