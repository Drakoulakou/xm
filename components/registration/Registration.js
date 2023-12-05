import Subtitle from "../subtitle/Subtitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";
import RegistrationForm from "./components/registration-form/RegistrationForm";

export default function Registration() {
  return (
    <section className={styles}>
      <h1>- Register Here -</h1>
      <Subtitle
        className="subtitle"
        subtitle="Join us to celebrate our biggest night of the year."
      />
      <div className="tableInfo">
        <div className="calendarInfo">
          <FontAwesomeIcon icon={faCalendarCheck} />
          <p>12 NOVEMBER 2022</p>
        </div>
        <div className="clockInfo">
          <FontAwesomeIcon icon={faClock} />
          <p>16:00 – 23:00</p>
        </div>
        <div className="locationInfo">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Centara Grand & Bangkok Convention Centre, Bangkok</p>
        </div>
      </div>
      <RegistrationForm />
    </section>
  );
}
