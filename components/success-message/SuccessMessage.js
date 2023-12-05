import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";

export default function SuccessMessage({ methods }) {
  return (
    <div className={styles}>
      <div className="inline">
        <FontAwesomeIcon icon={faCheckCircle} />
        <h2>Registration Successfull</h2>
      </div>
      <div className="inline">
        <FontAwesomeIcon icon={faCaretRight} className="secondary" />
        <p>
          Thank you for registering for our event with XM. You will receive an
          email shortly with confirmation of your registration.
        </p>
      </div>
    </div>
  );
}
