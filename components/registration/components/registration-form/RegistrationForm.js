import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import FormOne from "./components/form-one/FormOne";
import FormTwo from "./components/form-two/FormTwo";
import Button from "@/components/button/Button";
import SuccessMessage from "@/components/registration/components/success-message/SuccessMessage";
import styles from "./styles";

export default function RegistrationForm() {
  const [formNumber, setFormNumber] = useState(1);
  const [progress1Percentage, setProgress1Percentage] = useState(0);
  const [progress2Percentage, setProgress2Percentage] = useState(0);
  const [success, setSuccess] = useState(false);

  const methods = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (methods.formState.isValid) {
      console.log("formData", data);
      setSuccess(true);
    }
  };

  return (
    <div className={styles}>
      {success ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {formNumber === 1 ? (
            <>
              <FormOne methods={methods} />
              <Button
                title="CONTINUE"
                disabled={!methods.formState.isValid}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setFormNumber(formNumber + 1);
                }}
              />
            </>
          ) : (
            <>
              <FormTwo methods={methods} />
              <Button
                title="REGISTER NOW"
                type="submit"
                disabled={!methods.formState.isValid}
              />
            </>
          )}
        </form>
      )}
      <p className="text-link-align">
        Don’t have an account? <Link href="/">Create one here</Link> and
        register for the event
      </p>
      <p className="text-link-align">
        Terms and Conditions apply*. To read the full T&Cs, click
        <Link href="/">here</Link>.
      </p>
    </div>
  );
}
