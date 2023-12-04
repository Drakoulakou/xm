import { useState } from "react";

import styles from "./styles";
import FormOne from "./components/form-one/FormOne";
import FormTwo from "./components/form-two/FormTwo";
import Button from "../button/Button";
import Link from "next/link";

export default function RegistrationForm() {
  const [formNumber, setFormNumber] = useState(1);
  const [progress1Percentage, setProgress1Percentage] = useState(0);
  const [progress2Percentage, setProgress2Percentage] = useState(0);
  return (
    <section className={styles}>
      {formNumber === 1 ? <FormOne /> : <FormTwo />}
      <Button
        title={formNumber === 1 ? "CONTINUE" : "REGISTER NOW"}
        onClick={() => setFormNumber(formNumber + 1)}
      ></Button>
      <div className="text-link-align">
        <p>Don’t have an account?</p> <Link href="/">Create one here</Link>
        <p>and register for the event</p>
      </div>
      <div className="text-link-align">
        <p>Terms and Conditions apply*. To read the full T&Cs, click </p>
        <Link href="/">here</Link>
        <p>.</p>
      </div>
    </section>
  );
}
