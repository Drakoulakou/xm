import { css } from "@emotion/css";

const styles = css`
  color: var(--white-color);
  background-color: #2f2b38;
  width: 240px;
  height: 175px;
  border-radius: 25px;
  border: 2px solid #a7a7a733;
  margin: 10px;

  .cryptocard-uper-section {
    display: flex;
    align-items: center;
    padding: 16px 16px 0px;
    justify-content: flex-start;
  }
  .padding {
    padding: 3px;
  }
  .horizontal {
    opacity: 15%;
    border-top: 2px solid white;
    margin: 15px;
  }
  .cryptoCard-name {
    background: #fff8d6;
    border-radius: 5px;
    color: black;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 10px;
    font-weight: 700;
  }
  .cryptoCard-priceUSD {
    font-size: 19px;
    font-weight: 700;
    padding-left: 17px;
  }
  .cryptoCard-percentChange24h {
    font-size: 14px;
    margin: 10px 17px;
    color: var(--light-green-color);
  }
  .red {
    color: var(--light-red-color);
  }
`;

export default styles;
